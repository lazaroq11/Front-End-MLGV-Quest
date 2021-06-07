import axios from 'axios';
import React,{Component} from 'react';

class Image extends Component {
	state = {
        selectedFile: null
	};
	
	onFileChange = event => {
        this.setState({
            selectedFile: event.target.files[0]
        });
	};
	
	onFileUpload = () => {
        const formData = new FormData();
        
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );
	
	// Details of the uploaded file
	console.log(this.state.selectedFile);
	
	// Request made to the backend api
	// Send formData object
	axios.post("api/uploadfile", formData);
	};
	
    
	render() {
        return (
        <div>
            <input type="file" onChange={this.onFileChange} />
           
        </div>
	);
	}
}

export default Image;