import * as React from 'react';

interface IFetcherState {
    error: null | IFetcherError,
    isLoaded: boolean,
    items: IFetchedItems[]
}

interface IFetcherError {
    message: string
}

interface IFetchedItems {
    id: number,
    title: string,
    date: string,
    image: string,
    likes: number
}

interface IFetcherProps {
    json: string
}

class Fetcher extends React.Component<IFetcherProps,IFetcherState> {
    public constructor(props:IFetcherProps) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    public componentDidMount() {
        fetch(`http://my-json-server.typicode.com/mattshadowwing/json/${this.props.json}`)
            .then((res:any) => res.json())
            .then(
                (result:IFetchedItems[]) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error:IFetcherError) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    public render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className={`data ${this.props.json}`}>
                    <ul>
                        {items.map((item:IFetchedItems) => (
                            <li key={item.id}>
                                {item.image &&
                                <span className="image"><img src={require(`./../assets/${item.image}`)} alt="image"/></span>
                                }
                                <div className="dateTime">
                                    {item.date &&
                                    <span className="date">{item.date}</span>
                                    }
                                    {item.title &&
                                    <span className="title">{item.title}</span>
                                    }
                                </div>
                                {item.likes >= 0 &&
                                <div className="likes">{item.likes}</div>
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}
export default Fetcher;