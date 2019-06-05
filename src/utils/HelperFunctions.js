class HelperFunctions {
    static fetchFunc (method, data) {
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
        return fetch("http://localhost:4000/users", obj)
          .then(res => res.json())
    }
}

export default HelperFunctions;