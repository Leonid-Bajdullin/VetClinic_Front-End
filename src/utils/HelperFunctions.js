class HelperFunctions {
    static fetchFunc (method, data, url) {
        let obj = {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: method
        }
        if (method === "POST") {
          obj.body = JSON.stringify(data)
        }
        return fetch(`http://localhost:4000/${url}`, obj)
          .then(res => res.json())
    }

    // handleInputChange = event => {
    //   event.preventDefault();
  
    //   this.setState({
    //     [event.target.name]: event.target.value,
    //   });
    // }
}

export default HelperFunctions;

