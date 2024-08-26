import React from "react";
import ReactDOM from "react-dom/client"

const Header=()=>{
    return(
     <div className="header">
        <img className="logo" alt="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>
       <div className="list-item">
        <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
       </div>
     </div>
    );
}

// Restaurants data in array with complete detail info for that restaurant
const resObj=[
              {
                "info": {
                  "id": "33722",
                  "name": "KFC",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/69e69c55-d2bb-4207-8310-131fc693f78a_33722.JPG",
                  "locality": "SGS Mall",
                  "areaName": "Camp Area",
                  "costForTwo": "₹400 for two",
                  "cuisines": [
                    "Burgers",
                    "Rolls & Wraps",
                    "Fast Food"
                  ],
                  "avgRating": 4.2,
                  "parentId": "547",
                  "avgRatingString": "4.2",
                  "totalRatingsString": "5K+",
                  "sla": {
                    "deliveryTime": 39,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-23 22:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "Delivery!",
                              "imageId": "Rxawards/_CATEGORY-Burger.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/kfc-sgs-mall-camp-area-pune-33722",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "625226",
                  "name": "Pizza Hut",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/e8fe88f0-e41d-4995-b044-2ddb772042c5_625226.jpg",
                  "locality": "Shukrawar Peth",
                  "areaName": "Shukrawar Peth",
                  "costForTwo": "₹350 for two",
                  "cuisines": [
                    "Pizzas"
                  ],
                  "avgRating": 4,
                  "parentId": "721",
                  "avgRatingString": "4.0",
                  "totalRatingsString": "1K+",
                  "sla": {
                    "deliveryTime": 46,
                    "lastMileTravel": 2.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "45-50 mins",
                    "lastMileTravelString": "2.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-24 02:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "Delivery!",
                              "imageId": "Rxawards/_CATEGORY-Pizza.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹189"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "4.7",
                      "ratingCount": "100+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/pizza-hut-shukrawar-peth-pune-625226",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "326931",
                  "name": "Chinese Wok",
                  "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                  "locality": "Late GA Kulkarni Path",
                  "areaName": "Kothrud",
                  "costForTwo": "₹300 for two",
                  "cuisines": [
                    "Chinese",
                    "Asian",
                    "Tibetan",
                    "Desserts"
                  ],
                  "avgRating": 4.2,
                  "parentId": "61955",
                  "avgRatingString": "4.2",
                  "totalRatingsString": "5K+",
                  "sla": {
                    "deliveryTime": 51,
                    "lastMileTravel": 4.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "50-55 mins",
                    "lastMileTravelString": "4.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-24 02:00:00",
                    "opened": true
                  },
                  "badges": {
                    
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹199"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/chinese-wok-late-ga-kulkarni-path-kothrud-pune-326931",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "14548",
                  "name": "Burger King",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_14548.JPG",
                  "locality": "Paud Road",
                  "areaName": "Kothrud",
                  "costForTwo": "₹350 for two",
                  "cuisines": [
                    "Burgers",
                    "American"
                  ],
                  "avgRating": 4.2,
                  "parentId": "166",
                  "avgRatingString": "4.2",
                  "totalRatingsString": "10K+",
                  "sla": {
                    "deliveryTime": 51,
                    "lastMileTravel": 5.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "50-55 mins",
                    "lastMileTravelString": "5.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-24 06:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "Delivery!",
                              "imageId": "Rxawards/_CATEGORY-Burger.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹99"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/burger-king-paud-road-kothrud-pune-14548",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "402760",
                  "name": "Theobroma",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/82e3e893-0138-4b57-abf7-2aeacf144635_402760.jpg",
                  "locality": "Camp",
                  "areaName": "Camp",
                  "costForTwo": "₹400 for two",
                  "cuisines": [
                    "Bakery",
                    "Desserts"
                  ],
                  "avgRating": 4.6,
                  "parentId": "1040",
                  "avgRatingString": "4.6",
                  "totalRatingsString": "1K+",
                  "sla": {
                    "deliveryTime": 48,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "45-50 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-23 23:59:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                        "description": "Delivery!"
                      },
                      {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "Delivery!",
                              "imageId": "Rxawards/_CATEGORY-Desserts.png"
                            }
                          },
                          {
                            "attributes": {
                              "description": "Gourmet",
                              "imageId": "newg.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹99"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "4.0",
                      "ratingCount": "50+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/theobroma-camp-pune-402760",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "456986",
                  "name": "Domino's Pizza",
                  "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
                  "locality": "Somwar Peth",
                  "areaName": "Rasta Peth",
                  "costForTwo": "₹400 for two",
                  "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Pastas",
                    "Desserts"
                  ],
                  "avgRating": 3.9,
                  "parentId": "2456",
                  "avgRatingString": "3.9",
                  "totalRatingsString": "500+",
                  "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 1.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "1.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-24 01:59:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "Delivery!",
                              "imageId": "Rxawards/_CATEGORY-Pizza.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "₹150 OFF",
                    "subHeader": "ABOVE ₹299",
                    "discountTag": "FLAT DEAL"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/dominos-pizza-somwar-peth-rasta-peth-pune-456986",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "18808",
                  "name": "Faasos - Wraps, Rolls & Shawarma",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/6f47bc5a-30e4-4152-938d-a79912ae2acf_18808.JPG",
                  "locality": "Shaniwar Peth FC",
                  "areaName": "Shaniwar Peth",
                  "costForTwo": "₹200 for two",
                  "cuisines": [
                    "Kebabs",
                    "Fast Food",
                    "Snacks",
                    "American",
                    "Healthy Food",
                    "Desserts",
                    "Beverages"
                  ],
                  "avgRating": 4.4,
                  "parentId": "21809",
                  "avgRatingString": "4.4",
                  "totalRatingsString": "10K+",
                  "sla": {
                    "deliveryTime": 36,
                    "lastMileTravel": 0.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "0.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-23 23:59:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "Rxawards/_CATEGORY-Rolls.png",
                        "description": "Delivery!"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "Delivery!",
                              "imageId": "Rxawards/_CATEGORY-Rolls.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹99"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-fc-shaniwar-peth-pune-18808",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "25628",
                  "name": "Barista Coffee",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/29/c5e0d7be-fe37-43f1-8bbe-b47de11f360a_25628.jpg",
                  "locality": "Law College Road",
                  "areaName": "Erandwane",
                  "costForTwo": "₹350 for two",
                  "cuisines": [
                    "Beverages",
                    "Snacks",
                    "Desserts"
                  ],
                  "avgRating": 4.6,
                  "parentId": "416281",
                  "avgRatingString": "4.6",
                  "totalRatingsString": "500+",
                  "sla": {
                    "deliveryTime": 35,
                    "lastMileTravel": 3.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "3.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-23 23:00:00",
                    "opened": true
                  },
                  "badges": {
                    
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹129"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "3.9",
                      "ratingCount": "1K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/barista-coffee-law-college-road-erandwane-pune-25628",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "622143",
                  "name": "MOJO Pizza - 2X Toppings",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/1c21e4ed-37c9-45b2-9788-1fee96413482_622143.JPG",
                  "locality": "Camp",
                  "areaName": "Koregaon Park",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Fast Food",
                    "Desserts"
                  ],
                  "avgRating": 4.5,
                  "parentId": "11329",
                  "avgRatingString": "4.5",
                  "totalRatingsString": "100+",
                  "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 4.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-30 mins",
                    "lastMileTravelString": "4.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-24 02:00:00",
                    "opened": true
                  },
                  "badges": {
                    "textExtendedBadges": [
                      {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "guiltfree/GF_Logo_android_3x",
                              "shortDescription": "options available"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-camp-koregaon-park-pune-622143",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "32449",
                  "name": "Natural Ice Cream",
                  "cloudinaryImageId": "wrnpkuzslsff3uypuyqe",
                  "locality": "Nehru Memorial Hall",
                  "areaName": "Vivekanand Park",
                  "costForTwo": "₹150 for two",
                  "cuisines": [
                    "Ice Cream",
                    "Desserts"
                  ],
                  "avgRating": 4.7,
                  "veg": true,
                  "parentId": "2093",
                  "avgRatingString": "4.7",
                  "totalRatingsString": "1K+",
                  "sla": {
                    "deliveryTime": 36,
                    "lastMileTravel": 2.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "2.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-23 23:59:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                        "description": "Delivery!"
                      },
                      {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "Delivery!",
                              "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                            }
                          },
                          {
                            "attributes": {
                              "description": "pureveg",
                              "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "10% OFF",
                    "subHeader": "UPTO ₹40"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/natural-ice-cream-nehru-memorial-hall-vivekanand-park-pune-32449",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "506982",
                  "name": "McDonald's",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fcc0c1ea-aef9-4c8d-8b43-568a3b2e0808_506982.jpg",
                  "locality": "Narayan Peth",
                  "areaName": "Shaniwar Peth",
                  "costForTwo": "₹400 for two",
                  "cuisines": [
                    "Burgers",
                    "Beverages",
                    "Cafe",
                    "Desserts"
                  ],
                  "avgRating": 4.6,
                  "parentId": "630",
                  "avgRatingString": "4.6",
                  "totalRatingsString": "1K+",
                  "sla": {
                    "deliveryTime": 40,
                    "lastMileTravel": 1.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "1.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-24 00:45:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "Delivery!",
                              "imageId": "Rxawards/_CATEGORY-Burger.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹179"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/mcdonalds-narayan-peth-shaniwar-peth-pune-506982",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "25396",
                  "name": "Oven Story Pizza - Standout Toppings",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/22/187972f6-d355-47f8-8fae-f860f9ba520d_25396.JPG",
                  "locality": "Shaniwar Peth",
                  "areaName": "Narayan Peth",
                  "costForTwo": "₹400 for two",
                  "cuisines": [
                    "Pizzas",
                    "Pastas",
                    "Italian",
                    "Desserts",
                    "Beverages"
                  ],
                  "avgRating": 4.6,
                  "parentId": "3534",
                  "avgRatingString": "4.6",
                  "totalRatingsString": "5K+",
                  "sla": {
                    "deliveryTime": 32,
                    "lastMileTravel": 0.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "0.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-23 23:59:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "Delivery!",
                              "imageId": "Rxawards/_CATEGORY-Pizza.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹149"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-shaniwar-peth-narayan-peth-pune-25396",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "402924",
                  "name": "Mealful Rolls - India's Biggest Rolls",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/c9d826ce-2215-426b-89cb-350af02b33aa_402924.JPG",
                  "locality": "Dhole Patil Road",
                  "areaName": "Bund Garden Road",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                    "Fast Food",
                    "Snacks",
                    "North Indian",
                    "Desserts"
                  ],
                  "avgRating": 4.3,
                  "parentId": "10390",
                  "avgRatingString": "4.3",
                  "totalRatingsString": "100+",
                  "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 4.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-30 mins",
                    "lastMileTravelString": "4.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-24 02:00:00",
                    "opened": true
                  },
                  "badges": {
                    "textExtendedBadges": [
                      {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "guiltfree/GF_Logo_android_3x",
                              "shortDescription": "options available"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹139"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/mealful-rolls-indias-biggest-rolls-dhole-patil-road-bund-garden-road-pune-402924",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "402928",
                  "name": "ZAZA Mughal Biryani",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/6dfd4982-fbe9-4188-95f1-548061c61f73_402928.JPG",
                  "locality": "Sangamvadi",
                  "areaName": "Dhole Patil Road",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                    "Biryani",
                    "North Indian",
                    "Awadhi"
                  ],
                  "avgRating": 4.2,
                  "parentId": "22473",
                  "avgRatingString": "4.2",
                  "totalRatingsString": "100+",
                  "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 4.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-30 mins",
                    "lastMileTravelString": "4.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-24 02:00:00",
                    "opened": true
                  },
                  "badges": {
                    "textExtendedBadges": [
                      {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "guiltfree/GF_Logo_android_3x",
                              "shortDescription": "options available"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹139"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/zaza-mughal-biryani-sangamvadi-dhole-patil-road-pune-402928",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "402927",
                  "name": "NH1 Bowls - Highway To North",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/2ea0f794-f01a-4e93-8acf-107acc58a183_402927.JPG",
                  "locality": "Sangamvadi",
                  "areaName": "Dhole Patil Road",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                    "North Indian",
                    "Punjabi",
                    "Home Food"
                  ],
                  "avgRating": 4.7,
                  "parentId": "22452",
                  "avgRatingString": "4.7",
                  "totalRatingsString": "500+",
                  "sla": {
                    "deliveryTime": 20,
                    "lastMileTravel": 4.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-25 mins",
                    "lastMileTravelString": "4.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-24 02:00:00",
                    "opened": true
                  },
                  "badges": {
                    "textExtendedBadges": [
                      {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "guiltfree/GF_Logo_android_3x",
                              "shortDescription": "options available"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹139"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-sangamvadi-dhole-patil-road-pune-402927",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "740463",
                  "name": "Hola Pasta - Fresh Gourmet Pasta",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740463.JPG",
                  "locality": "Dhole Patil Road",
                  "areaName": "Bund Garden Road",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                    "Pastas",
                    "Italian",
                    "Desserts",
                    "Beverages"
                  ],
                  "avgRating": 4,
                  "parentId": "418135",
                  "avgRatingString": "4.0",
                  "totalRatingsString": "20+",
                  "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 4.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-30 mins",
                    "lastMileTravelString": "4.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-24 02:00:00",
                    "opened": true
                  },
                  "badges": {
                    
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹139"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/hola-pasta-fresh-gourmet-pasta-dhole-patil-road-bund-garden-road-pune-740463",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "681553",
                  "name": "LeanCrust Pizza- ThinCrust Experts",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/83ddbb8a-a96d-4bf3-91c0-21938c00650a_681553.JPG",
                  "locality": "Dhole Patil Road",
                  "areaName": "Bund Garden Road",
                  "costForTwo": "₹300 for two",
                  "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Desserts"
                  ],
                  "avgRating": 4.5,
                  "parentId": "11216",
                  "avgRatingString": "4.5",
                  "totalRatingsString": "100+",
                  "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 4.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-30 mins",
                    "lastMileTravelString": "4.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-24 02:00:00",
                    "opened": true
                  },
                  "badges": {
                    "textExtendedBadges": [
                      {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "guiltfree/GF_Logo_android_3x",
                              "shortDescription": "options available"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹139"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/leancrust-pizza-thincrust-experts-dhole-patil-road-bund-garden-road-pune-681553",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "643775",
                  "name": "WeFit - Protein Bowls, Salads & Sandwiches",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/db0d5750-c352-409e-9743-c4deb10c863d_643775.JPG",
                  "locality": "Camp",
                  "areaName": "South Extension",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                    "Healthy Food",
                    "Salads",
                    "Keto",
                    "Snacks"
                  ],
                  "avgRating": 4.6,
                  "parentId": "355285",
                  "avgRatingString": "4.6",
                  "totalRatingsString": "100+",
                  "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 4.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-30 mins",
                    "lastMileTravelString": "4.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-24 02:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "Rxawards/_CATEGORY-Guiltfree.png",
                        "description": "Delivery!"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "Delivery!",
                              "imageId": "Rxawards/_CATEGORY-Guiltfree.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹139"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/wefit-protein-bowls-salads-and-sandwiches-camp-south-extension-pune-643775",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "750337",
                  "name": "Daily Kitchen - Homely Meals",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750337.JPG",
                  "locality": "Dhole Patil Road",
                  "areaName": "Kalyani Nagar",
                  "costForTwo": "₹400 for two",
                  "cuisines": [
                    "Home Food",
                    "Indian",
                    "North Indian",
                    "Thalis"
                  ],
                  "avgRating": 4.2,
                  "parentId": "444382",
                  "avgRatingString": "4.2",
                  "totalRatingsString": "100+",
                  "sla": {
                    "deliveryTime": 20,
                    "lastMileTravel": 4.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-25 mins",
                    "lastMileTravelString": "4.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-24 02:00:00",
                    "opened": true
                  },
                  "badges": {
                    "textExtendedBadges": [
                      {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "guiltfree/GF_Logo_android_3x",
                              "shortDescription": "options available"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/daily-kitchen-homely-meals-dhole-patil-road-kalyani-nagar-pune-750337",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "692169",
                  "name": "BOOM Sandwich - Sub of India",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/1ce6bcf2-023b-4e4a-90a8-cb7035bcd4b8_692169.JPG",
                  "locality": "Dhole Patil Road",
                  "areaName": "Bund Garden Road",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                    "Snacks",
                    "Indian",
                    "Desserts"
                  ],
                  "avgRating": 4.3,
                  "parentId": "401169",
                  "avgRatingString": "4.3",
                  "totalRatingsString": "100+",
                  "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 4.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-30 mins",
                    "lastMileTravelString": "4.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-24 02:00:00",
                    "opened": true
                  },
                  "badges": {
                    "textExtendedBadges": [
                      {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "guiltfree/GF_Logo_android_3x",
                              "shortDescription": "options available"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹109"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/boom-sandwich-sub-of-india-dhole-patil-road-bund-garden-road-pune-692169",
                  "type": "WEBLINK"
                }
              }
            ]
const ResCards=(props)=>{
    //console.log(props.resData[0]) as props.key from parent gives data nd it's array so with 0 we get 0-index data from resData

    // props => gives entire obj for that passed data
    // props.resData =>gives only value of that resData attribute passed from parent
    console.log(props)
    console.log(props.resData)

    // De-Structure values of restaurant like name, cuisines, rating time etc
    const {name, cuisines, time, sla, avgRating,cloudinaryImageId} = props.resData.info

    
    // if no sla used above below is also way to get deliveryTime
    const {deliveryTime} =props.resData.info.sla;
    return(
        <div className="cards">
            {/* Rigid way to do */}
            {/* <img className="resImg" alt="foodimg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f58a2e0f3bb68ed0798f3e36c21c7cd0"/>
            <h3>Name</h3>
            <h4 style={{display:"flex", justifyContent:"space-between"}}><span>Rating</span> <span>Time</span></h4>
            <h4>cuisines</h4> */}

            {/* Dynamic way with dynamic data */}
            <img className="resImg" alt="foodimg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3 style={{fontSize:"20px", fontFamily:"cursive"}}>{name}</h3>
            <h4 style={{display:"flex", justifyContent:"space-between"}}><span>{avgRating} Stars</span> <span>{sla.deliveryTime} minutes</span></h4>
            <h4>{cuisines}</h4> 
        </div>
    )
}

const Body =()=>{
    return(
     <div className="body">
        <div className="searchBar">
            <input className="input" type="text" placeholder="Search for restaurant and food"></input>
            <button className="btn">search</button><br/>
        </div>
         <h2 style={{marginLeft:"400px", fontFamily:"cursive", marginTop:"10px"}}>Popular Cuisines</h2>
         <div className="menuContainer">
            <img className="menuImg" alt="menuImg" 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/b4ff78ecc5b8b66f732dd06228916d65"/>
            
            <img className="menuImg" alt="menuImg" 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/5dd234f7decdac4b4f71a2ff1408e10f"/>
           
            <img className="menuImg" alt="menuImg" 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/3df4fca020027e89b89c733cdffc4966"/>
            
            
            <img className="menuImg" alt="menuImg" 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/8322f6d6df488dc1f5a6674cfe863f0f"/>
            
            
            <img className="menuImg" alt="menuImg" 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/87664acb0f9dd95d10a549bb8190ab27"/>
            
            <img className="menuImg" alt="menuImg" 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/e76b511935016406e6ebc11dd7593387"/>
        </div> 

        {/* without loop/map */}
        {/* <div className="resContainer">
                <ResCards resData={resObj[0]}/>
                <ResCards resData={resObj[1]}/>
                <ResCards resData={resObj[2]}/>
                <ResCards resData={resObj[3]}/>
                <ResCards resData={resObj[4]}/>
                <ResCards resData={resObj[5]}/>
                <ResCards resData={resObj[6]}/>
                <ResCards resData={resObj[7]}/>
                <ResCards resData={resObj[8]}/>
                <ResCards resData={resObj[9]}/>
                <ResCards resData={resObj[10]}/>
                <ResCards resData={resObj[11]}/>
                <ResCards resData={resObj[12]}/>
                <ResCards resData={resObj[13]}/>
                <ResCards resData={resObj[14]}/>
                <ResCards resData={resObj[15]}/>
                <ResCards resData={resObj[16]}/>
                <ResCards resData={resObj[17]}/>
                
        </div> */}
        <div className="resContainer">
            {resObj.map((restaurant)=>{
                return(
                <ResCards key={restaurant.info.id} resData={restaurant}/>
                )
            })}
        </div>

     </div>
    )
}


const AppLayout =()=>{
    return(
        <div className="App">
           <Header />
           <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)