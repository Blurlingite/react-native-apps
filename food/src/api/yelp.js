import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 0x8QBBv3T3oPo7DZNY-tKya3roJb61MQaUeUi1FzgMotVjbjqVfvltuf0estWGMlqE_0GetaqGD58nwSCdyYNzyD6xoXDjY9Prc9IvTulBIDTq1a9dvNHAcXcADMXnYx",
  },
});
