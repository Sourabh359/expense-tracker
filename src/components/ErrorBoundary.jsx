import React from "react";

export default class ErrorBoundary extends React.Component {

    constructor (props){
        super(props);
        this.state={
            hasError:false
        }
    }

    static getDerivedStateFromError(error){
        return{
            hasError:true,
        }
    }

    componentDidCatch(error,errorInfo){
        console.log("Error Caught By Error Boundary:",error);
        console.log("Error Information:",errorInfo);
    }

    handleReset=()=>{
        window.location.reload();
    }

    render(){
        if(this.state.hasError){
            return(
                <div className="container mt-5 text-center">
                    <h2>Something went wrong!</h2>

                    <p className="text-muted">An unexpected error occurred. Please try again.</p>
                    <button className="btn btn-primary" onClick={this.handleReset}>Try Again
                    </button>
                </div>
            )
        }
        return this.props.children;
    }
}