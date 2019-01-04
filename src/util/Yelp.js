
//Client ID
//-8x7OC1vpMFoHgFpciMt5g

//API Key
//850lWlnqM40KwnySJb83pBn8EnaAKkws0biH-TiGwFFRL3IgnFvugf5-Kpz0q50FazGJm6JmwBe4InHPly9pBX9dfxhkuJZPepgjxlGkmsTdeTmGNTmrUzqx0wYeXHYx

const apiKey = '850lWlnqM40KwnySJb83pBn8EnaAKkws0biH-TiGwFFRL3IgnFvugf5-Kpz0q50FazGJm6JmwBe4InHPly9pBX9dfxhkuJZPepgjxlGkmsTdeTmGNTmrUzqx0wYeXHYx'

const yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        }).then((response) =>{
            return response.json();
        }).then((jsonResponse) =>{
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(((business) => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    };
                }));
            }
        })
    }
};

export default yelp;