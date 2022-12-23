package main
import {
	"fmt"
	"net/http"
	"net/ioutil"
	"encoding/json"
}
func main() {
	
}
func api() {
	
	url := "https://hellion.jesus.sh"
	req, _ := http.newRequest("GET", url, nil)
	// Set this to the HWID or some unique identifier
	//req.Header.Add("host", "")
	res, _ := http.DefaultClient.Do(req)
	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	// Dev only
	fmt.Println(body)
	fmt.Println(string(body))

}
func exec() {

}