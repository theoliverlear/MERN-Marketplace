class Image extends React.Component {
    render() {
        return (
            <div className="Image">
                <img src={this.props.src} alt={this.props.alt} />
            </div>
        );
    }
}