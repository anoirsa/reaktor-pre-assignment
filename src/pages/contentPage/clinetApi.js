import axios from "axios";

const hResultsClient = axios.create({ baseURL: "https://cors.eu.org" });

export default hResultsClient;
