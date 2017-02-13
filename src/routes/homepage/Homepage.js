/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Form from "react-jsonschema-form";
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Homepage.css';
import $ from 'jquery'

const title = 'Create a new homepage';

function Homepage(props, context) {
  context.setTitle(title);

  function _create(formData) {
    return $.ajax({
      url: 'http://staging.thekooples.com/homepage-preview',
      type: 'POST',
      data: {
        formData: formData
      }
    })
  };

  function _onSubmit(formData) {
  	console.log(formData);
    var xhr = _create(formData);
    xhr.done(_onSuccess)
    .fail(_onError)
  };

  function _onSuccess(data) {
    alert("success");
  };

  function _onError(data) {
    var message = "Failed to create the user";
    var res = data.responseJSON;
    if(res.message) {
      message = data.responseJSON.message;
    }
  };

  const schema = {
   "definitions":{
      "link_types":{
         "type":"string",
         "enum":[
            "Category",
            "Product",
            "CMS",
            "External"
         ]
      },
      "text_types":{
         "type":"string",
         "enum":[
            "Title (h2)",
            "Subtitle (h3)",
            "Description (h4)"
         ]
      },
      "text_position_h":{
         "type":"string",
         "enum":[
            "Left",
            "Center",
            "Right"
         ]
      },
      "text_position_v":{
         "type":"string",
         "enum":[
            "Top",
            "Middle",
            "Bottom"
         ]
      },
      "storeviews":{
         "type":"string",
         "enum":[
            "Website EU (FR)",
            "Website EU (EN)",
            "Website UK",
            "Website DE",
            "Website US",
            "Website CH (FR)",
            "Website CH (DE)"
         ]
      },
      "black_white":{
         "type":"string",
         "enum":[
            "Black",
            "White"
         ]
      },
      "link":{
         "title":"Link",
         "type":"object",
         "required":[

         ],
         "properties":{
            "type":{
               "title":"Type",
               "$ref":"#/definitions/link_types"
            },
            "value":{
               "type":"string",
               "title":"Value",
               "description":"Category code, product SKU, CMS identifier or URL (external)"
            },
            "class":{
               "type":"string",
               "title":"Class",
               "description":"A custom class can be added"
            },
            "title":{
               "type":"string",
               "title":"Title",
               "description":"Display when mouse over"
            }
         }
      },
      "text":{
         "title":"Text",
         "type":"object",
         "required":[

         ],
         "properties":{
            "type":{
               "title":"Type",
               "$ref":"#/definitions/text_types"
            },
            "value":{
               "type":"string",
               "title":"Value"
            },
            "color":{
               "type":"string",
               "title":"Color"
            },
            "class":{
               "type":"string",
               "title":"Class",
               "description":"A custom class can be added"
            },
            "link":{
               "title":"Text link",
               "$ref":"#/definitions/link"
            }
         }
      },
      "image":{
         "title":"Image",
         "type":"object",
         "required":[

         ],
         "properties":{
            "desktop_file":{
               "title":"Desktop image",
               "description":"Resolution 2100 x 1060 px",
               "type":"string",
               "format":"data-url"
            },
            "mobile_file":{
               "title":"Mobile image",
               "description":"Resolution 640 x 710 px",
               "type":"string",
               "format":"data-url"
            },
            "alt":{
               "type":"string",
               "title":"Alt",
               "description":"Display when image broken"
            },
            "class":{
               "type":"string",
               "title":"Class",
               "description":"A custom class can be added"
            },
            "link":{
               "title":"Image link",
               "$ref":"#/definitions/link"
            }
         }
      }
   },
   "title":"General",
   "type":"object",
   "required":[
      "storeview",
      "tag"
   ],
   "properties":{
      "storeview":{
         "$ref":"#/definitions/storeviews",
         "title":"Storeview"
      },
      "tag":{
         "type":"string",
         "title":"Tag",
         "description":"Tag version of the homepage"
      },
      "datetime":{
         "type":"string",
         "title":"Datetime",
         "description":"Date & Time of homepage deployment",
         "format":"date-time"
      },
      "slides":{
         "type":"array",
         "title":"Top slider",
         "description":"You can easily manage (add/move/remove) the slide elements",
         "items":{
            "type":"object",
            "required":[

            ],
            "properties":{
               "slide":{
                  "title":"Slide element",
                  "type":"object",
                  "required":[

                  ],
                  "properties":{
                     "class":{
                        "type":"string",
                        "title":"Class",
                        "description":"A custom class can be added"
                     },
                     "navColor":{
                        "$ref":"#/definitions/black_white",
                        "title":"Sidebar navigation menu color"
                     },
                     "image":{
                        "title":"Slide image",
                        "$ref":"#/definitions/image"
                     },
                     "block_text_position":{
                        "title":"Block text position",
                        "type":"object",
                        "required":[
                           "text_position_h",
                           "text_position_v"
                        ],
                        "properties":{
                           "text_position_h":{
                              "title":"Horizontal position",
                              "$ref":"#/definitions/text_position_h"
                           },
                           "text_position_v":{
                              "title":"Vertical position",
                              "$ref":"#/definitions/text_position_v"
                           }
                        }
                     },
                     "text_lines":{
                        "type":"array",
                        "title":"Slide text line",
                        "description":"Each text will be added to a new line",
                        "items":{
                           "type":"object",
                           "required":[

                           ],
                           "properties":{
                              "text":{
                                 "title":"Slide text",
                                 "$ref":"#/definitions/text"
                              }
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   }
	};

			//	      __________  ____  ____
			//	     /_  __/ __ \/ __ \/ __ \
			//	      / / / / / / / / / / / /
			//	     / / / /_/ / /_/ / /_/ /
			//	    /_/  \____/_____/\____/
	
	    // "mosaic": {
	    //   "type": "array",
	    //   "title": "Mosaic",
	    //   "items": {
	    //     "type": "object",
	    //     "required": [
	    //       "id"
	    //     ],
	    //     "properties": {
	    //       "id": {
	    //         "type": "integer",
	    //         "title": "Mosaic number"
	    //       },
	    //       "mobile_hide": {
	    //         "type": "boolean",
	    //         "title": "Hide on mobile ?",
	    //         "default": false
	    //       }
	    //     }
	    //   }
	    // }

	const uiSchema = {
	  "text": {
	    "color": {
	      "ui:widget": "color"
	    }
	  }
	}

  const log = (type) => console.log.bind(console, type);

  const onSubmit = ({formData}) => _onSubmit({formData});

  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <Form schema={schema}
        		uiSchema={uiSchema}
            onSubmit={onSubmit}
            onError={log("errors")} />
      </div>
    </div>
  );
}

Homepage.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Homepage);