var require = meteorInstall({"client":{"template.main.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// client/template.main.js                                                                                      //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
                                                                                                                // 1
Template.body.addContent((function() {                                                                          // 2
  var view = this;                                                                                              // 3
  return HTML.Raw('<div id="app"></div>');                                                                      // 4
}));                                                                                                            // 5
Meteor.startup(Template.body.renderToDocument);                                                                 // 6
                                                                                                                // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"AccountsUI.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// client/AccountsUI.jsx                                                                                        //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                   //
                                                                                                                //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                          //
                                                                                                                //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                     //
                                                                                                                //
var _inherits3 = _interopRequireDefault(_inherits2);                                                            //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
module.export({                                                                                                 // 1
	"default": function () {                                                                                       // 1
		return AccountsUI;                                                                                            // 1
	}                                                                                                              // 1
});                                                                                                             // 1
var React = void 0,                                                                                             // 1
    Component = void 0;                                                                                         // 1
module.watch(require("react"), {                                                                                // 1
	"default": function (v) {                                                                                      // 1
		React = v;                                                                                                    // 1
	},                                                                                                             // 1
	Component: function (v) {                                                                                      // 1
		Component = v;                                                                                                // 1
	}                                                                                                              // 1
}, 0);                                                                                                          // 1
var ReactDOM = void 0;                                                                                          // 1
module.watch(require("react-dom"), {                                                                            // 1
	"default": function (v) {                                                                                      // 1
		ReactDOM = v;                                                                                                 // 1
	}                                                                                                              // 1
}, 1);                                                                                                          // 1
                                                                                                                //
var AccountsUI = function (_Component) {                                                                        //
	(0, _inherits3.default)(AccountsUI, _Component);                                                               //
                                                                                                                //
	function AccountsUI() {                                                                                        //
		(0, _classCallCheck3.default)(this, AccountsUI);                                                              //
		return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));                     //
	}                                                                                                              //
                                                                                                                //
	AccountsUI.prototype.componentDidMount = function () {                                                         //
		function componentDidMount() {                                                                                //
			this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));                  // 8
		}                                                                                                             // 10
                                                                                                                //
		return componentDidMount;                                                                                     //
	}();                                                                                                           //
                                                                                                                //
	AccountsUI.prototype.componentWillUnmount = function () {                                                      //
		function componentWillUnmount() {                                                                             //
			Blaze.remove(this.view);                                                                                     // 13
		}                                                                                                             // 14
                                                                                                                //
		return componentWillUnmount;                                                                                  //
	}();                                                                                                           //
                                                                                                                //
	AccountsUI.prototype.render = function () {                                                                    //
		function render() {                                                                                           //
			return React.createElement("span", {                                                                         // 16
				ref: "container"                                                                                            // 16
			});                                                                                                          // 16
		}                                                                                                             // 17
                                                                                                                //
		return render;                                                                                                //
	}();                                                                                                           //
                                                                                                                //
	return AccountsUI;                                                                                             //
}(Component);                                                                                                   //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"CountryList.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// client/CountryList.js                                                                                        //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
// import {Countries} from '../imports/api/Countries'                                                           // 1
// var options = []                                                                                             // 5
// var arr =                                                                                                    // 6
// [                                                                                                            // 7
// "Afghanistan",                                                                                               // 8
// "Albania",                                                                                                   // 9
// "Algeria",                                                                                                   // 10
// "Andorra",                                                                                                   // 11
// "Angola",                                                                                                    // 12
// "Antigua and Barbuda",                                                                                       // 13
// "Argentina",                                                                                                 // 14
// "Armenia",                                                                                                   // 15
// "Aruba",                                                                                                     // 16
// "Australia",                                                                                                 // 17
// "Austria",                                                                                                   // 18
// "Azerbaijan",                                                                                                // 19
// "Bahamas, The",                                                                                              // 20
// "Bahrain",                                                                                                   // 21
// "Bangladesh",                                                                                                // 22
// "Barbados",                                                                                                  // 23
// "Belarus",                                                                                                   // 24
// "Belgium",                                                                                                   // 25
// "Belize",                                                                                                    // 26
// "Benin",                                                                                                     // 27
// "Bhutan",                                                                                                    // 28
// "Bolivia",                                                                                                   // 29
// "Bosnia and Herzegovina",                                                                                    // 30
// "Botswana",                                                                                                  // 31
// "Brazil",                                                                                                    // 32
// "Brunei",                                                                                                    // 33
// "Bulgaria",                                                                                                  // 34
// "Burkina Faso",                                                                                              // 35
// "Burma",                                                                                                     // 36
// "Burundi",                                                                                                   // 37
// "Cambodia",                                                                                                  // 38
// "Cameroon",                                                                                                  // 39
// "Canada",                                                                                                    // 40
// "Cabo Verde",                                                                                                // 41
// "Central African Republic",                                                                                  // 42
// "Chad",                                                                                                      // 43
// "Chile",                                                                                                     // 44
// "China",                                                                                                     // 45
// "Colombia",                                                                                                  // 46
// "Comoros",                                                                                                   // 47
// "Congo, Democratic Republic of the",                                                                         // 48
// "Congo, Republic of the",                                                                                    // 49
// "Costa Rica",                                                                                                // 50
// "Cote d'Ivoire",                                                                                             // 51
// "Croatia",                                                                                                   // 52
// "Cuba",                                                                                                      // 53
// "Curacao",                                                                                                   // 54
// "Cyprus",                                                                                                    // 55
// "Czechia",                                                                                                   // 56
// "Denmark",                                                                                                   // 57
// "Djibouti",                                                                                                  // 58
// "Dominica",                                                                                                  // 59
// "Dominican Republic",                                                                                        // 60
// "East Timor (see Timor-Leste)",                                                                              // 61
// "Ecuador",                                                                                                   // 62
// "Egypt",                                                                                                     // 63
// "El Salvador",                                                                                               // 64
// "Equatorial Guinea",                                                                                         // 65
// "Eritrea",                                                                                                   // 66
// "Estonia",                                                                                                   // 67
// "Ethiopia",                                                                                                  // 68
// "Fiji",                                                                                                      // 69
// "Finland",                                                                                                   // 70
// "France",                                                                                                    // 71
// "Gabon",                                                                                                     // 72
// "Gambia, The",                                                                                               // 73
// "Georgia",                                                                                                   // 74
// "Germany",                                                                                                   // 75
// "Ghana",                                                                                                     // 76
// "Greece",                                                                                                    // 77
// "Grenada",                                                                                                   // 78
// "Guatemala",                                                                                                 // 79
// "Guinea",                                                                                                    // 80
// "Guinea-Bissau",                                                                                             // 81
// "Guyana",                                                                                                    // 82
// "Haiti",                                                                                                     // 83
// "Holy See",                                                                                                  // 84
// "Honduras",                                                                                                  // 85
// "Hong Kong",                                                                                                 // 86
// "Hungary",                                                                                                   // 87
// "Iceland",                                                                                                   // 88
// "India",                                                                                                     // 89
// "Indonesia",                                                                                                 // 90
// "Iran",                                                                                                      // 91
// "Iraq",                                                                                                      // 92
// "Ireland",                                                                                                   // 93
// "Israel",                                                                                                    // 94
// "Italy",                                                                                                     // 95
// "Jamaica",                                                                                                   // 96
// "Japan",                                                                                                     // 97
// "Jordan",                                                                                                    // 98
// "Kazakhstan",                                                                                                // 99
// "Kenya",                                                                                                     // 100
// "Kiribati",                                                                                                  // 101
// "Korea, North",                                                                                              // 102
// "Korea, South",                                                                                              // 103
// "Kosovo",                                                                                                    // 104
// "Kuwait",                                                                                                    // 105
// "Kyrgyzstan",                                                                                                // 106
// "Laos",                                                                                                      // 107
// "Latvia",                                                                                                    // 108
// "Lebanon",                                                                                                   // 109
// "Lesotho",                                                                                                   // 110
// "Liberia",                                                                                                   // 111
// "Libya",                                                                                                     // 112
// "Liechtenstein",                                                                                             // 113
// "Lithuania",                                                                                                 // 114
// "Luxembourg",                                                                                                // 115
// "Macau",                                                                                                     // 116
// "Macedonia",                                                                                                 // 117
// "Madagascar",                                                                                                // 118
// "Malawi",                                                                                                    // 119
// "Malaysia",                                                                                                  // 120
// "Maldives",                                                                                                  // 121
// "Mali",                                                                                                      // 122
// "Malta",                                                                                                     // 123
// "Marshall Islands",                                                                                          // 124
// "Mauritania",                                                                                                // 125
// "Mauritius",                                                                                                 // 126
// "Mexico",                                                                                                    // 127
// "Micronesia",                                                                                                // 128
// "Moldova",                                                                                                   // 129
// "Monaco",                                                                                                    // 130
// "Mongolia",                                                                                                  // 131
// "Montenegro",                                                                                                // 132
// "Morocco",                                                                                                   // 133
// "Mozambique",                                                                                                // 134
// "Namibia",                                                                                                   // 135
// "Nauru",                                                                                                     // 136
// "Nepal",                                                                                                     // 137
// "Netherlands",                                                                                               // 138
// "New Zealand",                                                                                               // 139
// "Nicaragua",                                                                                                 // 140
// "Niger",                                                                                                     // 141
// "Nigeria",                                                                                                   // 142
// "North Korea",                                                                                               // 143
// "Norway",                                                                                                    // 144
// "Oman",                                                                                                      // 145
// "Pakistan",                                                                                                  // 146
// "Palau",                                                                                                     // 147
// "Palestinian Territories",                                                                                   // 148
// "Panama",                                                                                                    // 149
// "Papua New Guinea",                                                                                          // 150
// "Paraguay",                                                                                                  // 151
// "Peru",                                                                                                      // 152
// "Philippines",                                                                                               // 153
// "Poland",                                                                                                    // 154
// "Portugal",                                                                                                  // 155
// "Qatar",                                                                                                     // 156
// "Romania",                                                                                                   // 157
// "Russia",                                                                                                    // 158
// "Rwanda",                                                                                                    // 159
// "Saint Kitts and Nevis",                                                                                     // 160
// "Saint Lucia",                                                                                               // 161
// "Saint Vincent and the Grenadines",                                                                          // 162
// "Samoa",                                                                                                     // 163
// "San Marino",                                                                                                // 164
// "Sao Tome and Principe",                                                                                     // 165
// "Saudi Arabia",                                                                                              // 166
// "Senegal",                                                                                                   // 167
// "Serbia",                                                                                                    // 168
// "Seychelles",                                                                                                // 169
// "Sierra Leone",                                                                                              // 170
// "Singapore",                                                                                                 // 171
// "Sint Maarten",                                                                                              // 172
// "Slovakia",                                                                                                  // 173
// "Slovenia",                                                                                                  // 174
// "Solomon Islands",                                                                                           // 175
// "Somalia",                                                                                                   // 176
// "South Africa",                                                                                              // 177
// "South Korea",                                                                                               // 178
// "South Sudan",                                                                                               // 179
// "Spain",                                                                                                     // 180
// "Sri Lanka",                                                                                                 // 181
// "Sudan",                                                                                                     // 182
// "Suriname",                                                                                                  // 183
// "Swaziland",                                                                                                 // 184
// "Sweden",                                                                                                    // 185
// "Switzerland",                                                                                               // 186
// "Syria",                                                                                                     // 187
// "Taiwan",                                                                                                    // 188
// "Tajikistan",                                                                                                // 189
// "Tanzania",                                                                                                  // 190
// "Thailand",                                                                                                  // 191
// "Timor-Leste",                                                                                               // 192
// "Togo",                                                                                                      // 193
// "Tonga",                                                                                                     // 194
// "Trinidad and Tobago",                                                                                       // 195
// "Tunisia",                                                                                                   // 196
// "Turkey",                                                                                                    // 197
// "Turkmenistan",                                                                                              // 198
// "Tuvalu",                                                                                                    // 199
// "Uganda",                                                                                                    // 200
// "Ukraine",                                                                                                   // 201
// "United Arab Emirates",                                                                                      // 202
// "United Kingdom",                                                                                            // 203
// "Uruguay",                                                                                                   // 204
// "Uzbekistan",                                                                                                // 205
// "Vanuatu",                                                                                                   // 206
// "Venezuela",                                                                                                 // 207
// "Vietnam",                                                                                                   // 208
// "Yemen",                                                                                                     // 209
// "Zambia",                                                                                                    // 210
// "Zimbabwe"                                                                                                   // 211
// ].map(ele=>{                                                                                                 // 212
//     Countries.insert({key:ele,text:ele,value:ele},(err,done)=>{                                              // 213
//     	console.log(err,done)                                                                                   // 214
//     })                                                                                                       // 215
// })                                                                                                           // 216
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// client/main.js                                                                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var Meteor = void 0;                                                                                            // 1
module.watch(require("meteor/meteor"), {                                                                        // 1
  Meteor: function (v) {                                                                                        // 1
    Meteor = v;                                                                                                 // 1
  }                                                                                                             // 1
}, 0);                                                                                                          // 1
var React = void 0;                                                                                             // 1
module.watch(require("react"), {                                                                                // 1
  "default": function (v) {                                                                                     // 1
    React = v;                                                                                                  // 1
  }                                                                                                             // 1
}, 1);                                                                                                          // 1
var render = void 0;                                                                                            // 1
module.watch(require("react-dom"), {                                                                            // 1
  render: function (v) {                                                                                        // 1
    render = v;                                                                                                 // 1
  }                                                                                                             // 1
}, 2);                                                                                                          // 1
var routes = void 0;                                                                                            // 1
module.watch(require("../imports/routes"), {                                                                    // 1
  routes: function (v) {                                                                                        // 1
    routes = v;                                                                                                 // 1
  }                                                                                                             // 1
}, 3);                                                                                                          // 1
//import the React component that we haven't created yet! ...oops                                               // 10
Meteor.startup(function () {                                                                                    // 12
  render(routes(), document.getElementById('app'));                                                             // 13
});                                                                                                             // 14
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"api":{"Countries.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/api/Countries.js                                                                                     //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.export({                                                                                                 // 1
  Countries: function () {                                                                                      // 1
    return Countries;                                                                                           // 1
  }                                                                                                             // 1
});                                                                                                             // 1
var Mongo = void 0;                                                                                             // 1
module.watch(require("meteor/mongo"), {                                                                         // 1
  Mongo: function (v) {                                                                                         // 1
    Mongo = v;                                                                                                  // 1
  }                                                                                                             // 1
}, 0);                                                                                                          // 1
var Countries = new Mongo.Collection('Countries');                                                              // 3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"auth":{"AdminArea.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/auth/AdminArea.jsx                                                                                   //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                   //
                                                                                                                //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                          //
                                                                                                                //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                     //
                                                                                                                //
var _inherits3 = _interopRequireDefault(_inherits2);                                                            //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
module.export({                                                                                                 // 1
  "default": function () {                                                                                      // 1
    return AdminArea;                                                                                           // 1
  }                                                                                                             // 1
});                                                                                                             // 1
var React = void 0;                                                                                             // 1
module.watch(require("react"), {                                                                                // 1
  "default": function (v) {                                                                                     // 1
    React = v;                                                                                                  // 1
  }                                                                                                             // 1
}, 0);                                                                                                          // 1
var AccountsUI = void 0;                                                                                        // 1
module.watch(require("../../client/AccountsUI.jsx"), {                                                          // 1
  "default": function (v) {                                                                                     // 1
    AccountsUI = v;                                                                                             // 1
  }                                                                                                             // 1
}, 1);                                                                                                          // 1
var HomeHeader = void 0;                                                                                        // 1
module.watch(require("../HomeHeader"), {                                                                        // 1
  "default": function (v) {                                                                                     // 1
    HomeHeader = v;                                                                                             // 1
  }                                                                                                             // 1
}, 2);                                                                                                          // 1
var AdminForm = void 0;                                                                                         // 1
module.watch(require("../AdminForm"), {                                                                         // 1
  "default": function (v) {                                                                                     // 1
    AdminForm = v;                                                                                              // 1
  }                                                                                                             // 1
}, 3);                                                                                                          // 1
var AdminButtons = void 0;                                                                                      // 1
module.watch(require("../AdminButtons"), {                                                                      // 1
  "default": function (v) {                                                                                     // 1
    AdminButtons = v;                                                                                           // 1
  }                                                                                                             // 1
}, 4);                                                                                                          // 1
var MenuExampleSecondary = void 0;                                                                              // 1
module.watch(require("../Menu"), {                                                                              // 1
  "default": function (v) {                                                                                     // 1
    MenuExampleSecondary = v;                                                                                   // 1
  }                                                                                                             // 1
}, 5);                                                                                                          // 1
                                                                                                                //
var AdminArea = function (_React$Component) {                                                                   //
  (0, _inherits3.default)(AdminArea, _React$Component);                                                         //
                                                                                                                //
  function AdminArea() {                                                                                        //
    (0, _classCallCheck3.default)(this, AdminArea);                                                             //
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));             //
  }                                                                                                             //
                                                                                                                //
  AdminArea.prototype.render = function () {                                                                    //
    function render() {                                                                                         //
      return React.createElement(                                                                               // 14
        "div",                                                                                                  // 16
        null,                                                                                                   // 16
        React.createElement(                                                                                    // 19
          "span",                                                                                               // 19
          {                                                                                                     // 19
            className: "user box"                                                                               // 19
          },                                                                                                    // 19
          React.createElement(MenuExampleSecondary, {                                                           // 20
            history: this.props.history                                                                         // 20
          }),                                                                                                   // 20
          React.createElement(HomeHeader, null),                                                                // 21
          React.createElement(AdminButtons, null)                                                               // 22
        ),                                                                                                      // 19
        React.createElement(AdminForm, null)                                                                    // 25
      );                                                                                                        // 16
    }                                                                                                           // 30
                                                                                                                //
    return render;                                                                                              //
  }();                                                                                                          //
                                                                                                                //
  return AdminArea;                                                                                             //
}(React.Component);                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"AdminButtons.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/AdminButtons.jsx                                                                                     //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var React = void 0;                                                                                             // 1
module.watch(require("react"), {                                                                                // 1
  "default": function (v) {                                                                                     // 1
    React = v;                                                                                                  // 1
  }                                                                                                             // 1
}, 0);                                                                                                          // 1
var Button = void 0,                                                                                            // 1
    Icon = void 0;                                                                                              // 1
module.watch(require("semantic-ui-react"), {                                                                    // 1
  Button: function (v) {                                                                                        // 1
    Button = v;                                                                                                 // 1
  },                                                                                                            // 1
  Icon: function (v) {                                                                                          // 1
    Icon = v;                                                                                                   // 1
  }                                                                                                             // 1
}, 1);                                                                                                          // 1
                                                                                                                //
var AdminButton = function () {                                                                                 // 4
  return React.createElement(                                                                                   // 4
    "div",                                                                                                      // 6
    {                                                                                                           // 6
      className: "container"                                                                                    // 6
    },                                                                                                          // 6
    React.createElement(                                                                                        // 7
      "div",                                                                                                    // 7
      {                                                                                                         // 7
        className: "adminButton"                                                                                // 7
      },                                                                                                        // 7
      React.createElement(                                                                                      // 8
        Button,                                                                                                 // 8
        {                                                                                                       // 8
          animated: true                                                                                        // 8
        },                                                                                                      // 8
        React.createElement(                                                                                    // 9
          Button.Content,                                                                                       // 9
          {                                                                                                     // 9
            visible: true                                                                                       // 9
          },                                                                                                    // 9
          "View Products"                                                                                       // 9
        ),                                                                                                      // 9
        React.createElement(                                                                                    // 10
          Button.Content,                                                                                       // 10
          {                                                                                                     // 10
            hidden: true                                                                                        // 10
          },                                                                                                    // 10
          React.createElement(Icon, {                                                                           // 11
            name: "right arrow"                                                                                 // 11
          })                                                                                                    // 11
        )                                                                                                       // 10
      ),                                                                                                        // 8
      React.createElement(                                                                                      // 14
        Button,                                                                                                 // 14
        {                                                                                                       // 14
          animated: "vertical"                                                                                  // 14
        },                                                                                                      // 14
        React.createElement(                                                                                    // 15
          Button.Content,                                                                                       // 15
          {                                                                                                     // 15
            hidden: true                                                                                        // 15
          },                                                                                                    // 15
          React.createElement(Icon, {                                                                           // 15
            name: "shop"                                                                                        // 15
          })                                                                                                    // 15
        ),                                                                                                      // 15
        React.createElement(                                                                                    // 16
          Button.Content,                                                                                       // 16
          {                                                                                                     // 16
            visible: true                                                                                       // 16
          },                                                                                                    // 16
          "Shop"                                                                                                // 16
        )                                                                                                       // 16
      ),                                                                                                        // 14
      React.createElement(                                                                                      // 20
        Button,                                                                                                 // 20
        {                                                                                                       // 20
          animated: "fade"                                                                                      // 20
        },                                                                                                      // 20
        React.createElement(                                                                                    // 21
          Button.Content,                                                                                       // 21
          {                                                                                                     // 21
            visible: true                                                                                       // 21
          },                                                                                                    // 21
          "View Orders"                                                                                         // 21
        ),                                                                                                      // 21
        React.createElement(                                                                                    // 24
          Button.Content,                                                                                       // 24
          {                                                                                                     // 24
            hidden: true                                                                                        // 24
          },                                                                                                    // 24
          React.createElement(Icon, {                                                                           // 25
            name: "find"                                                                                        // 25
          })                                                                                                    // 25
        )                                                                                                       // 24
      )                                                                                                         // 20
    )                                                                                                           // 7
  );                                                                                                            // 6
};                                                                                                              // 4
                                                                                                                //
module.exportDefault(AdminButton);                                                                              // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"AdminForm.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/AdminForm.jsx                                                                                        //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                   //
                                                                                                                //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                          //
                                                                                                                //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                     //
                                                                                                                //
var _inherits3 = _interopRequireDefault(_inherits2);                                                            //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
var React = void 0,                                                                                             // 1
    Component = void 0;                                                                                         // 1
module.watch(require("react"), {                                                                                // 1
  "default": function (v) {                                                                                     // 1
    React = v;                                                                                                  // 1
  },                                                                                                            // 1
  Component: function (v) {                                                                                     // 1
    Component = v;                                                                                              // 1
  }                                                                                                             // 1
}, 0);                                                                                                          // 1
var Form = void 0;                                                                                              // 1
module.watch(require("semantic-ui-react"), {                                                                    // 1
  Form: function (v) {                                                                                          // 1
    Form = v;                                                                                                   // 1
  }                                                                                                             // 1
}, 1);                                                                                                          // 1
var options = [{                                                                                                // 4
  key: 'm',                                                                                                     // 5
  text: 'Yoga Mat',                                                                                             // 5
  value: 'Mat'                                                                                                  // 5
}, {                                                                                                            // 5
  key: 't',                                                                                                     // 6
  text: 'Yoga Towell',                                                                                          // 6
  value: 'Towell'                                                                                               // 6
}];                                                                                                             // 6
var option2 = [{                                                                                                // 9
  key: 's',                                                                                                     // 10
  text: '1.55 mm',                                                                                              // 10
  value: '1.55 mm'                                                                                              // 10
}, {                                                                                                            // 10
  key: 'th',                                                                                                    // 11
  text: '3 mm',                                                                                                 // 11
  value: '3 mm'                                                                                                 // 11
}, {                                                                                                            // 11
  key: 'tn',                                                                                                    // 12
  text: '5 mm',                                                                                                 // 12
  value: '5 mm'                                                                                                 // 12
}];                                                                                                             // 12
var option3 = [{                                                                                                // 16
  key: 's',                                                                                                     // 17
  text: '68"',                                                                                                  // 17
  value: '68"'                                                                                                  // 17
}, {                                                                                                            // 17
  key: 'th',                                                                                                    // 18
  text: '71"',                                                                                                  // 18
  value: '71"'                                                                                                  // 18
}, {                                                                                                            // 18
  key: 'tn',                                                                                                    // 19
  text: '74+"',                                                                                                 // 19
  value: '74"'                                                                                                  // 19
}];                                                                                                             // 19
                                                                                                                //
var AdminForm = function (_Component) {                                                                         //
  (0, _inherits3.default)(AdminForm, _Component);                                                               //
                                                                                                                //
  function AdminForm() {                                                                                        // 23
    (0, _classCallCheck3.default)(this, AdminForm);                                                             // 23
                                                                                                                //
    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this));                          // 23
                                                                                                                //
    _this.state = {                                                                                             // 25
      thickness: '',                                                                                            // 26
      length: '',                                                                                               // 27
      category: ''                                                                                              // 28
    };                                                                                                          // 25
    return _this;                                                                                               // 23
  }                                                                                                             // 32
                                                                                                                //
  AdminForm.prototype.addProducts = function () {                                                               //
    function addProducts(e) {                                                                                   //
      e.preventDefault();                                                                                       // 35
      var productName = this.refs.productName.value.trim();                                                     // 37
      var sku = this.refs.sku.value.trim();                                                                     // 38
      var price = this.refs.price.value.trim();                                                                 // 39
      var category = this.state.category.trim();                                                                // 40
      var thickness = this.state.thickness.trim();                                                              // 41
      var length = this.state.length.trim();                                                                    // 42
      debugger; /*  this.refs.productName.value   = ''                                                          // 43
                    this.refs.sku.value = ''                                                                    //
                    this.refs.price.value = ''                                                                  //
                                                                                                                //
                                                                                                                //
                                                                                                                //
                    this.props.addProducts(productName,sku,price,category,thickness,length)                     //
                  */                                                                                            //
      Meteor.call('addproduct', productName, sku, price, category, thickness, length);                          // 54
    }                                                                                                           // 55
                                                                                                                //
    return addProducts;                                                                                         //
  }();                                                                                                          //
                                                                                                                //
  AdminForm.prototype.handleChange = function () {                                                              //
    function handleChange(e) {                                                                                  //
      var _this2 = this;                                                                                        // 57
                                                                                                                //
      this.setState({                                                                                           // 59
        thickness: e.target.textContent                                                                         // 59
      }, function () {                                                                                          // 59
        console.log(_this2.state);                                                                              // 59
      });                                                                                                       // 59
    }                                                                                                           // 61
                                                                                                                //
    return handleChange;                                                                                        //
  }();                                                                                                          //
                                                                                                                //
  AdminForm.prototype.handleChange2 = function () {                                                             //
    function handleChange2(e) {                                                                                 //
      var _this3 = this;                                                                                        // 62
                                                                                                                //
      this.setState({                                                                                           // 64
        length: e.target.textContent                                                                            // 64
      }, function () {                                                                                          // 64
        console.log(_this3.state);                                                                              // 64
      });                                                                                                       // 64
    }                                                                                                           // 66
                                                                                                                //
    return handleChange2;                                                                                       //
  }();                                                                                                          //
                                                                                                                //
  AdminForm.prototype.handleChange3 = function () {                                                             //
    function handleChange3(e) {                                                                                 //
      var _this4 = this;                                                                                        // 68
                                                                                                                //
      this.setState({                                                                                           // 70
        category: e.target.textContent                                                                          // 70
      }, function () {                                                                                          // 70
        console.log(_this4.state);                                                                              // 70
      });                                                                                                       // 70
    }                                                                                                           // 72
                                                                                                                //
    return handleChange3;                                                                                       //
  }();                                                                                                          //
                                                                                                                //
  AdminForm.prototype.render = function () {                                                                    //
    function render() {                                                                                         //
      return React.createElement(                                                                               // 77
        Form,                                                                                                   // 78
        {                                                                                                       // 78
          className: "containerz",                                                                              // 78
          onSubmit: this.addProducts.bind(this)                                                                 // 78
        },                                                                                                      // 78
        React.createElement(                                                                                    // 83
          "div",                                                                                                // 83
          {                                                                                                     // 83
            className: "ui form"                                                                                // 83
          },                                                                                                    // 83
          React.createElement(                                                                                  // 84
            "div",                                                                                              // 84
            {                                                                                                   // 84
              className: "fields"                                                                               // 84
            },                                                                                                  // 84
            React.createElement(                                                                                // 85
              "div",                                                                                            // 85
              {                                                                                                 // 85
                className: "field"                                                                              // 85
              },                                                                                                // 85
              React.createElement(                                                                              // 86
                "label",                                                                                        // 86
                null,                                                                                           // 86
                "Product Name"                                                                                  // 86
              ),                                                                                                // 86
              React.createElement("input", {                                                                    // 87
                onSubmit: this.addProducts.bind(this),                                                          // 87
                ref: "productName",                                                                             // 87
                label: "Product name",                                                                          // 87
                placeholder: "Product Name"                                                                     // 87
              })                                                                                                // 87
            ),                                                                                                  // 85
            React.createElement(                                                                                // 89
              "div",                                                                                            // 89
              {                                                                                                 // 89
                className: "field"                                                                              // 89
              },                                                                                                // 89
              React.createElement(                                                                              // 90
                "label",                                                                                        // 90
                null,                                                                                           // 90
                "Item Sku"                                                                                      // 90
              ),                                                                                                // 90
              React.createElement("input", {                                                                    // 91
                onSubmit: this.addProducts.bind(this),                                                          // 91
                ref: "sku",                                                                                     // 91
                label: "Item Number",                                                                           // 91
                placeholder: "Item Sku"                                                                         // 91
              })                                                                                                // 91
            ),                                                                                                  // 89
            React.createElement(                                                                                // 93
              "div",                                                                                            // 93
              {                                                                                                 // 93
                className: "field"                                                                              // 93
              },                                                                                                // 93
              React.createElement(                                                                              // 94
                "label",                                                                                        // 94
                null,                                                                                           // 94
                "Item Price"                                                                                    // 94
              ),                                                                                                // 94
              React.createElement("input", {                                                                    // 95
                onSubmit: this.addProducts.bind(this),                                                          // 95
                ref: "price",                                                                                   // 95
                label: "Item Price",                                                                            // 95
                placeholder: "Item Price"                                                                       // 95
              })                                                                                                // 95
            ),                                                                                                  // 93
            React.createElement(Form.Select, {                                                                  // 97
              name: "category",                                                                                 // 97
              onChange: this.handleChange3.bind(this),                                                          // 97
              label: "Category",                                                                                // 97
              options: options,                                                                                 // 97
              placeholder: "Category"                                                                           // 97
            }),                                                                                                 // 97
            React.createElement(Form.Select, {                                                                  // 98
              text: "thickness",                                                                                // 98
              onChange: this.handleChange.bind(this),                                                           // 98
              label: "Thickness",                                                                               // 98
              options: option2,                                                                                 // 98
              placeholder: "Thickness"                                                                          // 98
            }),                                                                                                 // 98
            React.createElement(Form.Select, {                                                                  // 99
              name: "length",                                                                                   // 99
              onChange: this.handleChange2.bind(this),                                                          // 99
              label: "Length",                                                                                  // 99
              options: option3,                                                                                 // 99
              placeholder: "Length"                                                                             // 99
            })                                                                                                  // 99
          )                                                                                                     // 84
        ),                                                                                                      // 83
        React.createElement("textarea", {                                                                       // 105
          "class": "description",                                                                               // 105
          label: "Item Description",                                                                            // 105
          placeholder: "Item Description"                                                                       // 105
        }),                                                                                                     // 105
        React.createElement(                                                                                    // 106
          "div",                                                                                                // 106
          {                                                                                                     // 106
            className: "ui action input"                                                                        // 106
          },                                                                                                    // 106
          React.createElement("input", {                                                                        // 110
            type: "file"                                                                                        // 110
          }),                                                                                                   // 110
          React.createElement(                                                                                  // 111
            "div",                                                                                              // 111
            {                                                                                                   // 111
              className: "ui icon button"                                                                       // 111
            },                                                                                                  // 111
            React.createElement("i", {                                                                          // 112
              className: "attach icon"                                                                          // 112
            })                                                                                                  // 112
          )                                                                                                     // 111
        ),                                                                                                      // 106
        React.createElement(                                                                                    // 115
          "div",                                                                                                // 115
          {                                                                                                     // 115
            className: "ui action input"                                                                        // 115
          },                                                                                                    // 115
          React.createElement("input", {                                                                        // 116
            type: "file"                                                                                        // 116
          }),                                                                                                   // 116
          React.createElement(                                                                                  // 117
            "div",                                                                                              // 117
            {                                                                                                   // 117
              className: "ui icon button"                                                                       // 117
            },                                                                                                  // 117
            React.createElement("i", {                                                                          // 118
              className: "attach icon"                                                                          // 118
            })                                                                                                  // 118
          )                                                                                                     // 117
        ),                                                                                                      // 115
        React.createElement(                                                                                    // 121
          "div",                                                                                                // 121
          {                                                                                                     // 121
            className: "ui action input"                                                                        // 121
          },                                                                                                    // 121
          React.createElement("input", {                                                                        // 122
            type: "file"                                                                                        // 122
          }),                                                                                                   // 122
          React.createElement(                                                                                  // 123
            "div",                                                                                              // 123
            {                                                                                                   // 123
              className: "ui icon button"                                                                       // 123
            },                                                                                                  // 123
            React.createElement("i", {                                                                          // 124
              className: "attach icon"                                                                          // 124
            })                                                                                                  // 124
          )                                                                                                     // 123
        ),                                                                                                      // 121
        React.createElement(Form, {                                                                             // 129
          label: "I agree to the Terms and Conditions"                                                          // 129
        }),                                                                                                     // 129
        React.createElement(                                                                                    // 130
          Form.Button,                                                                                          // 130
          null,                                                                                                 // 130
          " Add Item "                                                                                          // 130
        )                                                                                                       // 130
      );                                                                                                        // 78
    }                                                                                                           // 133
                                                                                                                //
    return render;                                                                                              //
  }();                                                                                                          //
                                                                                                                //
  return AdminForm;                                                                                             //
}(Component);                                                                                                   //
                                                                                                                //
module.exportDefault(AdminForm);                                                                                // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"BillingAddress.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/BillingAddress.jsx                                                                                   //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                   //
                                                                                                                //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                          //
                                                                                                                //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                     //
                                                                                                                //
var _inherits3 = _interopRequireDefault(_inherits2);                                                            //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
module.export({                                                                                                 // 1
  "default": function () {                                                                                      // 1
    return BillingAddress;                                                                                      // 1
  }                                                                                                             // 1
});                                                                                                             // 1
var React = void 0;                                                                                             // 1
module.watch(require("react"), {                                                                                // 1
  "default": function (v) {                                                                                     // 1
    React = v;                                                                                                  // 1
  }                                                                                                             // 1
}, 0);                                                                                                          // 1
                                                                                                                //
var BillingAddress = function (_React$Component) {                                                              //
  (0, _inherits3.default)(BillingAddress, _React$Component);                                                    //
                                                                                                                //
  function BillingAddress() {                                                                                   //
    (0, _classCallCheck3.default)(this, BillingAddress);                                                        //
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));             //
  }                                                                                                             //
                                                                                                                //
  BillingAddress.prototype.render = function () {                                                               //
    function render() {                                                                                         //
      return React.createElement(                                                                               // 11
        "div",                                                                                                  // 13
        {                                                                                                       // 13
          className: "field"                                                                                    // 13
        },                                                                                                      // 13
        React.createElement(                                                                                    // 14
          "label",                                                                                              // 14
          {                                                                                                     // 14
            className: "billingAddressTitle"                                                                    // 14
          },                                                                                                    // 14
          "Billing Address"                                                                                     // 14
        ),                                                                                                      // 14
        React.createElement(                                                                                    // 15
          "div",                                                                                                // 15
          {                                                                                                     // 15
            className: "fields"                                                                                 // 15
          },                                                                                                    // 15
          React.createElement(                                                                                  // 16
            "div",                                                                                              // 16
            {                                                                                                   // 16
              className: "twelve wide field"                                                                    // 16
            },                                                                                                  // 16
            React.createElement("input", {                                                                      // 17
              type: "text",                                                                                     // 17
              name: "shipping[address]",                                                                        // 17
              placeholder: "Street Address"                                                                     // 17
            })                                                                                                  // 17
          ),                                                                                                    // 16
          React.createElement(                                                                                  // 19
            "div",                                                                                              // 19
            {                                                                                                   // 19
              className: "four wide field"                                                                      // 19
            },                                                                                                  // 19
            React.createElement("input", {                                                                      // 20
              type: "text",                                                                                     // 20
              name: "shipping[address-2]",                                                                      // 20
              placeholder: "Apt #"                                                                              // 20
            })                                                                                                  // 20
          )                                                                                                     // 19
        )                                                                                                       // 15
      );                                                                                                        // 13
    }                                                                                                           // 26
                                                                                                                //
    return render;                                                                                              //
  }();                                                                                                          //
                                                                                                                //
  return BillingAddress;                                                                                        //
}(React.Component);                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Cart.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/Cart.jsx                                                                                             //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                   //
                                                                                                                //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                          //
                                                                                                                //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                     //
                                                                                                                //
var _inherits3 = _interopRequireDefault(_inherits2);                                                            //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
module.export({                                                                                                 // 1
	"default": function () {                                                                                       // 1
		return Cart;                                                                                                  // 1
	}                                                                                                              // 1
});                                                                                                             // 1
var React = void 0;                                                                                             // 1
module.watch(require("react"), {                                                                                // 1
	"default": function (v) {                                                                                      // 1
		React = v;                                                                                                    // 1
	}                                                                                                              // 1
}, 0);                                                                                                          // 1
var MenuExampleSecondary = void 0;                                                                              // 1
module.watch(require("./Menu"), {                                                                               // 1
	"default": function (v) {                                                                                      // 1
		MenuExampleSecondary = v;                                                                                     // 1
	}                                                                                                              // 1
}, 1);                                                                                                          // 1
var Footer = void 0;                                                                                            // 1
module.watch(require("./Footer"), {                                                                             // 1
	"default": function (v) {                                                                                      // 1
		Footer = v;                                                                                                   // 1
	}                                                                                                              // 1
}, 2);                                                                                                          // 1
var Button = void 0;                                                                                            // 1
module.watch(require("semantic-ui-react"), {                                                                    // 1
	Button: function (v) {                                                                                         // 1
		Button = v;                                                                                                   // 1
	}                                                                                                              // 1
}, 3);                                                                                                          // 1
var CheckOutPage = void 0;                                                                                      // 1
module.watch(require("./CheckOutPage"), {                                                                       // 1
	"default": function (v) {                                                                                      // 1
		CheckOutPage = v;                                                                                             // 1
	}                                                                                                              // 1
}, 4);                                                                                                          // 1
var HomeHeader = void 0;                                                                                        // 1
module.watch(require("./HomeHeader"), {                                                                         // 1
	"default": function (v) {                                                                                      // 1
		HomeHeader = v;                                                                                               // 1
	}                                                                                                              // 1
}, 5);                                                                                                          // 1
                                                                                                                //
var Cart = function (_React$Component) {                                                                        //
	(0, _inherits3.default)(Cart, _React$Component);                                                               //
                                                                                                                //
	function Cart() {                                                                                              //
		(0, _classCallCheck3.default)(this, Cart);                                                                    //
		return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));               //
	}                                                                                                              //
                                                                                                                //
	Cart.prototype.redirect = function () {                                                                        //
		function redirect() {                                                                                         //
			this.props.history.push("/CheckOutPage");                                                                    // 13
		}                                                                                                             // 14
                                                                                                                //
		return redirect;                                                                                              //
	}();                                                                                                           //
                                                                                                                //
	Cart.prototype.render = function () {                                                                          //
		function render() {                                                                                           //
			return React.createElement(                                                                                  // 19
				"div",                                                                                                      // 22
				{                                                                                                           // 22
					className: "full container"                                                                                // 22
				},                                                                                                          // 22
				React.createElement(MenuExampleSecondary, {                                                                 // 24
					history: this.props.history                                                                                // 24
				}),                                                                                                         // 24
				React.createElement(HomeHeader, null),                                                                      // 26
				React.createElement(                                                                                        // 28
					"div",                                                                                                     // 28
					{                                                                                                          // 28
						className: "main"                                                                                         // 28
					},                                                                                                         // 28
					React.createElement(                                                                                       // 29
						"span",                                                                                                   // 29
						{                                                                                                         // 29
							className: "product"                                                                                     // 29
						},                                                                                                        // 29
						"Product"                                                                                                 // 29
					),                                                                                                         // 29
					React.createElement(                                                                                       // 30
						"span",                                                                                                   // 30
						{                                                                                                         // 30
							className: "price"                                                                                       // 30
						},                                                                                                        // 30
						"Unit Price"                                                                                              // 30
					),                                                                                                         // 30
					React.createElement(                                                                                       // 31
						"span",                                                                                                   // 31
						{                                                                                                         // 31
							className: "qty"                                                                                         // 31
						},                                                                                                        // 31
						"Qty"                                                                                                     // 31
					),                                                                                                         // 31
					React.createElement(                                                                                       // 32
						"span",                                                                                                   // 32
						{                                                                                                         // 32
							className: "subtotal"                                                                                    // 32
						},                                                                                                        // 32
						"Subtotal"                                                                                                // 32
					)                                                                                                          // 32
				),                                                                                                          // 28
				React.createElement(                                                                                        // 35
					"div",                                                                                                     // 35
					{                                                                                                          // 35
						className: "first"                                                                                        // 35
					},                                                                                                         // 35
					React.createElement(                                                                                       // 36
						"span",                                                                                                   // 36
						{                                                                                                         // 36
							className: "product"                                                                                     // 36
						},                                                                                                        // 36
						"Yoga Mat One ",                                                                                          // 36
						React.createElement("br", null),                                                                          // 36
						React.createElement("img", {                                                                              // 37
							className: "cartItem",                                                                                   // 37
							src: "./1.jpeg"                                                                                          // 37
						})                                                                                                        // 37
					),                                                                                                         // 36
					React.createElement(                                                                                       // 38
						"span",                                                                                                   // 38
						{                                                                                                         // 38
							className: "price"                                                                                       // 38
						},                                                                                                        // 38
						"$100"                                                                                                    // 38
					),                                                                                                         // 38
					React.createElement(                                                                                       // 39
						"span",                                                                                                   // 39
						{                                                                                                         // 39
							className: "qty"                                                                                         // 39
						},                                                                                                        // 39
						React.createElement(                                                                                      // 40
							"select",                                                                                                // 40
							{                                                                                                        // 40
								className: "qtyBox"                                                                                     // 40
							},                                                                                                       // 40
							React.createElement(                                                                                     // 41
								"option",                                                                                               // 41
								null,                                                                                                   // 41
								"0"                                                                                                     // 41
							),                                                                                                       // 41
							React.createElement(                                                                                     // 42
								"option",                                                                                               // 42
								null,                                                                                                   // 42
								"1"                                                                                                     // 42
							),                                                                                                       // 42
							React.createElement(                                                                                     // 43
								"option",                                                                                               // 43
								null,                                                                                                   // 43
								"2"                                                                                                     // 43
							),                                                                                                       // 43
							React.createElement(                                                                                     // 44
								"option",                                                                                               // 44
								null,                                                                                                   // 44
								"3"                                                                                                     // 44
							),                                                                                                       // 44
							React.createElement(                                                                                     // 45
								"option",                                                                                               // 45
								null,                                                                                                   // 45
								"4"                                                                                                     // 45
							),                                                                                                       // 45
							React.createElement(                                                                                     // 46
								"option",                                                                                               // 46
								null,                                                                                                   // 46
								"5"                                                                                                     // 46
							),                                                                                                       // 46
							React.createElement(                                                                                     // 47
								"option",                                                                                               // 47
								null,                                                                                                   // 47
								"6"                                                                                                     // 47
							),                                                                                                       // 47
							React.createElement(                                                                                     // 48
								"option",                                                                                               // 48
								null,                                                                                                   // 48
								"7"                                                                                                     // 48
							),                                                                                                       // 48
							React.createElement(                                                                                     // 49
								"option",                                                                                               // 49
								null,                                                                                                   // 49
								"8"                                                                                                     // 49
							),                                                                                                       // 49
							React.createElement(                                                                                     // 50
								"option",                                                                                               // 50
								null,                                                                                                   // 50
								"9"                                                                                                     // 50
							),                                                                                                       // 50
							React.createElement(                                                                                     // 51
								"option",                                                                                               // 51
								null,                                                                                                   // 51
								"10"                                                                                                    // 51
							)                                                                                                        // 51
						)                                                                                                         // 40
					),                                                                                                         // 39
					React.createElement(                                                                                       // 56
						"span",                                                                                                   // 56
						{                                                                                                         // 56
							className: "subtotal"                                                                                    // 56
						},                                                                                                        // 56
						"$100"                                                                                                    // 56
					)                                                                                                          // 56
				),                                                                                                          // 35
				React.createElement(                                                                                        // 59
					"div",                                                                                                     // 59
					{                                                                                                          // 59
						className: "first"                                                                                        // 59
					},                                                                                                         // 59
					React.createElement(                                                                                       // 60
						"span",                                                                                                   // 60
						{                                                                                                         // 60
							className: "product"                                                                                     // 60
						},                                                                                                        // 60
						"Yoga Mat Two ",                                                                                          // 60
						React.createElement("br", null),                                                                          // 60
						React.createElement("img", {                                                                              // 61
							className: "cartItem",                                                                                   // 61
							src: "./1.jpeg"                                                                                          // 61
						})                                                                                                        // 61
					),                                                                                                         // 60
					React.createElement(                                                                                       // 62
						"span",                                                                                                   // 62
						{                                                                                                         // 62
							className: "price"                                                                                       // 62
						},                                                                                                        // 62
						"$80"                                                                                                     // 62
					),                                                                                                         // 62
					React.createElement(                                                                                       // 63
						"span",                                                                                                   // 63
						{                                                                                                         // 63
							className: "qty"                                                                                         // 63
						},                                                                                                        // 63
						React.createElement(                                                                                      // 64
							"select",                                                                                                // 64
							{                                                                                                        // 64
								className: "qtyBox"                                                                                     // 64
							},                                                                                                       // 64
							React.createElement(                                                                                     // 65
								"option",                                                                                               // 65
								null,                                                                                                   // 65
								"0"                                                                                                     // 65
							),                                                                                                       // 65
							React.createElement(                                                                                     // 66
								"option",                                                                                               // 66
								null,                                                                                                   // 66
								"1"                                                                                                     // 66
							),                                                                                                       // 66
							React.createElement(                                                                                     // 67
								"option",                                                                                               // 67
								null,                                                                                                   // 67
								"2"                                                                                                     // 67
							),                                                                                                       // 67
							React.createElement(                                                                                     // 68
								"option",                                                                                               // 68
								null,                                                                                                   // 68
								"3"                                                                                                     // 68
							),                                                                                                       // 68
							React.createElement(                                                                                     // 69
								"option",                                                                                               // 69
								null,                                                                                                   // 69
								"4"                                                                                                     // 69
							),                                                                                                       // 69
							React.createElement(                                                                                     // 70
								"option",                                                                                               // 70
								null,                                                                                                   // 70
								"5"                                                                                                     // 70
							),                                                                                                       // 70
							React.createElement(                                                                                     // 71
								"option",                                                                                               // 71
								null,                                                                                                   // 71
								"6"                                                                                                     // 71
							),                                                                                                       // 71
							React.createElement(                                                                                     // 72
								"option",                                                                                               // 72
								null,                                                                                                   // 72
								"7"                                                                                                     // 72
							),                                                                                                       // 72
							React.createElement(                                                                                     // 73
								"option",                                                                                               // 73
								null,                                                                                                   // 73
								"8"                                                                                                     // 73
							),                                                                                                       // 73
							React.createElement(                                                                                     // 74
								"option",                                                                                               // 74
								null,                                                                                                   // 74
								"9"                                                                                                     // 74
							),                                                                                                       // 74
							React.createElement(                                                                                     // 75
								"option",                                                                                               // 75
								null,                                                                                                   // 75
								"10"                                                                                                    // 75
							)                                                                                                        // 75
						)                                                                                                         // 64
					),                                                                                                         // 63
					React.createElement(                                                                                       // 78
						"span",                                                                                                   // 78
						{                                                                                                         // 78
							className: "subtotal"                                                                                    // 78
						},                                                                                                        // 78
						"$80"                                                                                                     // 78
					)                                                                                                          // 78
				),                                                                                                          // 59
				React.createElement(                                                                                        // 81
					"div",                                                                                                     // 81
					{                                                                                                          // 81
						className: "first"                                                                                        // 81
					},                                                                                                         // 81
					React.createElement(                                                                                       // 82
						"span",                                                                                                   // 82
						{                                                                                                         // 82
							className: "product"                                                                                     // 82
						},                                                                                                        // 82
						"Yoga Mat three",                                                                                         // 82
						React.createElement("br", null),                                                                          // 82
						React.createElement("img", {                                                                              // 83
							className: "cartItem",                                                                                   // 83
							src: "./1.jpeg"                                                                                          // 83
						})                                                                                                        // 83
					),                                                                                                         // 82
					React.createElement(                                                                                       // 84
						"span",                                                                                                   // 84
						{                                                                                                         // 84
							className: "price"                                                                                       // 84
						},                                                                                                        // 84
						"$130"                                                                                                    // 84
					),                                                                                                         // 84
					React.createElement(                                                                                       // 85
						"span",                                                                                                   // 85
						{                                                                                                         // 85
							className: "qty"                                                                                         // 85
						},                                                                                                        // 85
						React.createElement(                                                                                      // 86
							"select",                                                                                                // 86
							{                                                                                                        // 86
								className: "qtyBox"                                                                                     // 86
							},                                                                                                       // 86
							React.createElement(                                                                                     // 87
								"option",                                                                                               // 87
								null,                                                                                                   // 87
								"0"                                                                                                     // 87
							),                                                                                                       // 87
							React.createElement(                                                                                     // 88
								"option",                                                                                               // 88
								null,                                                                                                   // 88
								"1"                                                                                                     // 88
							),                                                                                                       // 88
							React.createElement(                                                                                     // 89
								"option",                                                                                               // 89
								null,                                                                                                   // 89
								"2"                                                                                                     // 89
							),                                                                                                       // 89
							React.createElement(                                                                                     // 90
								"option",                                                                                               // 90
								null,                                                                                                   // 90
								"3"                                                                                                     // 90
							),                                                                                                       // 90
							React.createElement(                                                                                     // 91
								"option",                                                                                               // 91
								null,                                                                                                   // 91
								"4"                                                                                                     // 91
							),                                                                                                       // 91
							React.createElement(                                                                                     // 92
								"option",                                                                                               // 92
								null,                                                                                                   // 92
								"5"                                                                                                     // 92
							),                                                                                                       // 92
							React.createElement(                                                                                     // 93
								"option",                                                                                               // 93
								null,                                                                                                   // 93
								"6"                                                                                                     // 93
							),                                                                                                       // 93
							React.createElement(                                                                                     // 94
								"option",                                                                                               // 94
								null,                                                                                                   // 94
								"7"                                                                                                     // 94
							),                                                                                                       // 94
							React.createElement(                                                                                     // 95
								"option",                                                                                               // 95
								null,                                                                                                   // 95
								"8"                                                                                                     // 95
							),                                                                                                       // 95
							React.createElement(                                                                                     // 96
								"option",                                                                                               // 96
								null,                                                                                                   // 96
								"9"                                                                                                     // 96
							),                                                                                                       // 96
							React.createElement(                                                                                     // 97
								"option",                                                                                               // 97
								null,                                                                                                   // 97
								"10"                                                                                                    // 97
							)                                                                                                        // 97
						)                                                                                                         // 86
					),                                                                                                         // 85
					React.createElement(                                                                                       // 100
						"span",                                                                                                   // 100
						{                                                                                                         // 100
							className: "subtotal"                                                                                    // 100
						},                                                                                                        // 100
						"$130"                                                                                                    // 100
					)                                                                                                          // 100
				),                                                                                                          // 81
				React.createElement(                                                                                        // 106
					"span",                                                                                                    // 106
					{                                                                                                          // 106
						className: "grandTotal"                                                                                   // 106
					},                                                                                                         // 106
					React.createElement(                                                                                       // 106
						"b",                                                                                                      // 106
						null,                                                                                                     // 106
						"Grand Total : $320"                                                                                      // 106
					),                                                                                                         // 106
					React.createElement(                                                                                       // 107
						Button,                                                                                                   // 107
						{                                                                                                         // 107
							onClick: this.redirect.bind(this),                                                                       // 107
							className: "ui button"                                                                                   // 108
						},                                                                                                        // 107
						"Check Out"                                                                                               // 107
					)                                                                                                          // 107
				),                                                                                                          // 106
				React.createElement(Footer, null)                                                                           // 112
			);                                                                                                           // 22
		}                                                                                                             // 120
                                                                                                                //
		return render;                                                                                                //
	}();                                                                                                           //
                                                                                                                //
	return Cart;                                                                                                   //
}(React.Component);                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"CheckOutPage.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/CheckOutPage.jsx                                                                                     //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                   //
                                                                                                                //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                          //
                                                                                                                //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                     //
                                                                                                                //
var _inherits3 = _interopRequireDefault(_inherits2);                                                            //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
module.export({                                                                                                 // 1
  "default": function () {                                                                                      // 1
    return CheckOutPage;                                                                                        // 1
  }                                                                                                             // 1
});                                                                                                             // 1
var React = void 0;                                                                                             // 1
module.watch(require("react"), {                                                                                // 1
  "default": function (v) {                                                                                     // 1
    React = v;                                                                                                  // 1
  }                                                                                                             // 1
}, 0);                                                                                                          // 1
var Form = void 0;                                                                                              // 1
module.watch(require("semantic-ui-react"), {                                                                    // 1
  Form: function (v) {                                                                                          // 1
    Form = v;                                                                                                   // 1
  }                                                                                                             // 1
}, 1);                                                                                                          // 1
var CountryComp = void 0;                                                                                       // 1
module.watch(require("./CountryComp"), {                                                                        // 1
  "default": function (v) {                                                                                     // 1
    CountryComp = v;                                                                                            // 1
  }                                                                                                             // 1
}, 2);                                                                                                          // 1
var MenuExampleSecondary = void 0;                                                                              // 1
module.watch(require("./Menu"), {                                                                               // 1
  "default": function (v) {                                                                                     // 1
    MenuExampleSecondary = v;                                                                                   // 1
  }                                                                                                             // 1
}, 3);                                                                                                          // 1
var ShippingInformation = void 0;                                                                               // 1
module.watch(require("./ShippingInformation"), {                                                                // 1
  "default": function (v) {                                                                                     // 1
    ShippingInformation = v;                                                                                    // 1
  }                                                                                                             // 1
}, 4);                                                                                                          // 1
var BillingAddress = void 0;                                                                                    // 1
module.watch(require("./BillingAddress"), {                                                                     // 1
  "default": function (v) {                                                                                     // 1
    BillingAddress = v;                                                                                         // 1
  }                                                                                                             // 1
}, 5);                                                                                                          // 1
var HomeHeader = void 0;                                                                                        // 1
module.watch(require("./HomeHeader"), {                                                                         // 1
  "default": function (v) {                                                                                     // 1
    HomeHeader = v;                                                                                             // 1
  }                                                                                                             // 1
}, 6);                                                                                                          // 1
var Footer = void 0;                                                                                            // 1
module.watch(require("./Footer"), {                                                                             // 1
  "default": function (v) {                                                                                     // 1
    Footer = v;                                                                                                 // 1
  }                                                                                                             // 1
}, 7);                                                                                                          // 1
                                                                                                                //
var CheckOutPage = function (_React$Component) {                                                                //
  (0, _inherits3.default)(CheckOutPage, _React$Component);                                                      //
                                                                                                                //
  function CheckOutPage() {                                                                                     //
    (0, _classCallCheck3.default)(this, CheckOutPage);                                                          //
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));             //
  }                                                                                                             //
                                                                                                                //
  CheckOutPage.prototype.render = function () {                                                                 //
    function render() {                                                                                         //
      return React.createElement(                                                                               // 13
        "div",                                                                                                  // 15
        {                                                                                                       // 15
          className: "container"                                                                                // 15
        },                                                                                                      // 15
        React.createElement(MenuExampleSecondary, {                                                             // 16
          history: this.props.history                                                                           // 16
        }),                                                                                                     // 16
        React.createElement(HomeHeader, null),                                                                  // 17
        React.createElement(                                                                                    // 18
          "form",                                                                                               // 18
          {                                                                                                     // 18
            className: "ui form"                                                                                // 18
          },                                                                                                    // 18
          React.createElement(ShippingInformation, null),                                                       // 19
          React.createElement(CountryComp, null),                                                               // 20
          React.createElement(BillingAddress, null),                                                            // 21
          React.createElement(CountryComp, null),                                                               // 22
          React.createElement(                                                                                  // 24
            "button",                                                                                           // 24
            {                                                                                                   // 24
              className: "ui button",                                                                           // 24
              tabindex: "0"                                                                                     // 24
            },                                                                                                  // 24
            "Submit"                                                                                            // 24
          )                                                                                                     // 24
        ),                                                                                                      // 18
        React.createElement(Footer, null)                                                                       // 27
      );                                                                                                        // 15
    }                                                                                                           // 31
                                                                                                                //
    return render;                                                                                              //
  }();                                                                                                          //
                                                                                                                //
  return CheckOutPage;                                                                                          //
}(React.Component);                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"CountryComp.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/CountryComp.jsx                                                                                      //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                   //
                                                                                                                //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                          //
                                                                                                                //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                     //
                                                                                                                //
var _inherits3 = _interopRequireDefault(_inherits2);                                                            //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
module.export({                                                                                                 // 1
	"default": function () {                                                                                       // 1
		return CountryComp;                                                                                           // 1
	}                                                                                                              // 1
});                                                                                                             // 1
var React = void 0;                                                                                             // 1
module.watch(require("react"), {                                                                                // 1
	"default": function (v) {                                                                                      // 1
		React = v;                                                                                                    // 1
	}                                                                                                              // 1
}, 0);                                                                                                          // 1
var Dropdown = void 0;                                                                                          // 1
module.watch(require("semantic-ui-react"), {                                                                    // 1
	Dropdown: function (v) {                                                                                       // 1
		Dropdown = v;                                                                                                 // 1
	}                                                                                                              // 1
}, 1);                                                                                                          // 1
var Countries = void 0;                                                                                         // 1
module.watch(require("./api/Countries"), {                                                                      // 1
	Countries: function (v) {                                                                                      // 1
		Countries = v;                                                                                                // 1
	}                                                                                                              // 1
}, 2);                                                                                                          // 1
                                                                                                                //
var CountryComp = function (_React$Component) {                                                                 //
	(0, _inherits3.default)(CountryComp, _React$Component);                                                        //
                                                                                                                //
	function CountryComp() {                                                                                       // 6
		(0, _classCallCheck3.default)(this, CountryComp);                                                             // 6
                                                                                                                //
		var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this));                      // 6
                                                                                                                //
		_this.state = {                                                                                               // 8
			countries: ''                                                                                                // 8
		};                                                                                                            // 8
		return _this;                                                                                                 // 6
	}                                                                                                              // 9
                                                                                                                //
	CountryComp.prototype.getData = function () {                                                                  //
		function getData(e) {                                                                                         //
			var country = e.target.textContent;                                                                          // 11
			this.props.getData(country);                                                                                 // 12
		}                                                                                                             // 13
                                                                                                                //
		return getData;                                                                                               //
	}();                                                                                                           //
                                                                                                                //
	CountryComp.prototype.componentWillMount = function () {                                                       //
		function componentWillMount() {                                                                               //
			var _this2 = this;                                                                                           // 15
                                                                                                                //
			Tracker.autorun(function () {                                                                                // 16
				var countries = Countries.find({}).fetch();                                                                 // 17
                                                                                                                //
				_this2.setState({                                                                                           // 18
					countries: countries                                                                                       // 18
				});                                                                                                         // 18
			});                                                                                                          // 20
		}                                                                                                             // 23
                                                                                                                //
		return componentWillMount;                                                                                    //
	}();                                                                                                           //
                                                                                                                //
	CountryComp.prototype.render = function () {                                                                   //
		function render() {                                                                                           //
			return React.createElement(Dropdown, {                                                                       // 26
				onChange: this.getData.bind(this),                                                                          // 29
				placeholder: "Select Country",                                                                              // 30
				fluid: true,                                                                                                // 31
				search: true,                                                                                               // 32
				selection: true,                                                                                            // 33
				options: this.state.countries                                                                               // 34
			});                                                                                                          // 28
		}                                                                                                             // 38
                                                                                                                //
		return render;                                                                                                //
	}();                                                                                                           //
                                                                                                                //
	return CountryComp;                                                                                            //
}(React.Component);                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Footer.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/Footer.jsx                                                                                           //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                   //
                                                                                                                //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                          //
                                                                                                                //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                     //
                                                                                                                //
var _inherits3 = _interopRequireDefault(_inherits2);                                                            //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
module.export({                                                                                                 // 1
								"default": function () {                                                                                // 1
																return Footer;                                                                                  // 1
								}                                                                                                       // 1
});                                                                                                             // 1
var React = void 0;                                                                                             // 1
module.watch(require("react"), {                                                                                // 1
								"default": function (v) {                                                                               // 1
																React = v;                                                                                      // 1
								}                                                                                                       // 1
}, 0);                                                                                                          // 1
                                                                                                                //
var Footer = function (_React$Component) {                                                                      //
								(0, _inherits3.default)(Footer, _React$Component);                                                      //
                                                                                                                //
								function Footer() {                                                                                     //
																(0, _classCallCheck3.default)(this, Footer);                                                    //
																return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
								}                                                                                                       //
                                                                                                                //
								Footer.prototype.render = function () {                                                                 //
																function render() {                                                                             //
																								return React.createElement(                                                             // 12
																																"footer",                                                                       // 14
																																{                                                                               // 14
																																								className: "footer"                                                     // 14
																																},                                                                              // 14
																																React.createElement(                                                            // 15
																																								"p",                                                                    // 15
																																								null,                                                                   // 15
																																								"2017 \xA9 Test E-Commerce Page"                                        // 15
																																)                                                                               // 15
																								);                                                                                      // 14
																}                                                                                               // 19
                                                                                                                //
																return render;                                                                                  //
								}();                                                                                                    //
                                                                                                                //
								return Footer;                                                                                          //
}(React.Component);                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"HomeHeader.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/HomeHeader.jsx                                                                                       //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                   //
                                                                                                                //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                          //
                                                                                                                //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                     //
                                                                                                                //
var _inherits3 = _interopRequireDefault(_inherits2);                                                            //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
module.export({                                                                                                 // 1
       "default": function () {                                                                                 // 1
              return Header;                                                                                    // 1
       }                                                                                                        // 1
});                                                                                                             // 1
var React = void 0;                                                                                             // 1
module.watch(require("react"), {                                                                                // 1
       "default": function (v) {                                                                                // 1
              React = v;                                                                                        // 1
       }                                                                                                        // 1
}, 0);                                                                                                          // 1
var AccountsUI = void 0;                                                                                        // 1
module.watch(require("../client/AccountsUI.jsx"), {                                                             // 1
       "default": function (v) {                                                                                // 1
              AccountsUI = v;                                                                                   // 1
       }                                                                                                        // 1
}, 1);                                                                                                          // 1
                                                                                                                //
var Header = function (_React$Component) {                                                                      //
       (0, _inherits3.default)(Header, _React$Component);                                                       //
                                                                                                                //
       function Header() {                                                                                      //
              (0, _classCallCheck3.default)(this, Header);                                                      //
              return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));   //
       }                                                                                                        //
                                                                                                                //
       Header.prototype.render = function () {                                                                  //
              function render() {                                                                               //
                     return React.createElement(                                                                // 10
                            "div",                                                                              // 15
                            {                                                                                   // 15
                                   className: "container"                                                       // 15
                            },                                                                                  // 15
                            React.createElement(                                                                // 16
                                   "div",                                                                       // 16
                                   {                                                                            // 16
                                          className: "header"                                                   // 16
                                   },                                                                           // 16
                                   React.createElement("img", {                                                 // 17
                                          className: "logo",                                                    // 17
                                          src: "logo.png"                                                       // 17
                                   })                                                                           // 17
                            ),                                                                                  // 16
                            React.createElement("hr", {                                                         // 23
                                   className: "style-two"                                                       // 23
                            })                                                                                  // 23
                     );                                                                                         // 15
              }                                                                                                 // 29
                                                                                                                //
              return render;                                                                                    //
       }();                                                                                                     //
                                                                                                                //
       return Header;                                                                                           //
}(React.Component);                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Images.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/Images.jsx                                                                                           //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                   //
                                                                                                                //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                          //
                                                                                                                //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                     //
                                                                                                                //
var _inherits3 = _interopRequireDefault(_inherits2);                                                            //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
module.export({                                                                                                 // 1
  "default": function () {                                                                                      // 1
    return Images;                                                                                              // 1
  }                                                                                                             // 1
});                                                                                                             // 1
var React = void 0;                                                                                             // 1
module.watch(require("react"), {                                                                                // 1
  "default": function (v) {                                                                                     // 1
    React = v;                                                                                                  // 1
  }                                                                                                             // 1
}, 0);                                                                                                          // 1
                                                                                                                //
var Images = function (_React$Component) {                                                                      //
  (0, _inherits3.default)(Images, _React$Component);                                                            //
                                                                                                                //
  function Images() {                                                                                           //
    (0, _classCallCheck3.default)(this, Images);                                                                //
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));             //
  }                                                                                                             //
                                                                                                                //
  Images.prototype.redirect = function () {                                                                     //
    function redirect() {                                                                                       //
      this.props.history.push("/ItemDescription");                                                              // 11
    }                                                                                                           // 12
                                                                                                                //
    return redirect;                                                                                            //
  }();                                                                                                          //
                                                                                                                //
  Images.prototype.render = function () {                                                                       //
    function render() {                                                                                         //
      var image = {                                                                                             // 18
        margin: '0 auto',                                                                                       // 19
        width: '100%',                                                                                          // 20
        border: '1px solid grey',                                                                               // 21
        padding: '2rem'                                                                                         // 22
      };                                                                                                        // 18
      return React.createElement(                                                                               // 26
        "div",                                                                                                  // 28
        {                                                                                                       // 28
          className: "wrapper"                                                                                  // 28
        },                                                                                                      // 28
        React.createElement(                                                                                    // 30
          "div",                                                                                                // 30
          null,                                                                                                 // 30
          " ",                                                                                                  // 30
          React.createElement("img", {                                                                          // 30
            onClick: this.redirect.bind(this),                                                                  // 30
            style: image,                                                                                       // 30
            className: "colonna",                                                                               // 30
            src: "./1.jpeg"                                                                                     // 30
          }),                                                                                                   // 30
          React.createElement(                                                                                  // 30
            "h4",                                                                                               // 30
            {                                                                                                   // 30
              className: "itemTitle"                                                                            // 30
            },                                                                                                  // 30
            "ProFlow Mat | Price : $100"                                                                        // 30
          ),                                                                                                    // 30
          " "                                                                                                   // 30
        ),                                                                                                      // 30
        React.createElement(                                                                                    // 31
          "div",                                                                                                // 31
          null,                                                                                                 // 31
          " ",                                                                                                  // 31
          React.createElement("img", {                                                                          // 31
            onClick: this.redirect.bind(this),                                                                  // 31
            style: image,                                                                                       // 31
            className: "colonna",                                                                               // 31
            src: "./1.jpeg"                                                                                     // 31
          }),                                                                                                   // 31
          React.createElement(                                                                                  // 31
            "h4",                                                                                               // 31
            {                                                                                                   // 31
              className: "itemTitle"                                                                            // 31
            },                                                                                                  // 31
            "ProFlow Mat | Price : $100"                                                                        // 31
          ),                                                                                                    // 31
          " "                                                                                                   // 31
        ),                                                                                                      // 31
        React.createElement(                                                                                    // 32
          "div",                                                                                                // 32
          null,                                                                                                 // 32
          " ",                                                                                                  // 32
          React.createElement("img", {                                                                          // 32
            onClick: this.redirect.bind(this),                                                                  // 32
            style: image,                                                                                       // 32
            className: "colonna",                                                                               // 32
            src: "./1.jpeg"                                                                                     // 32
          }),                                                                                                   // 32
          React.createElement(                                                                                  // 32
            "h4",                                                                                               // 32
            {                                                                                                   // 32
              className: "itemTitle"                                                                            // 32
            },                                                                                                  // 32
            "ProFlow Mat | Price : $100"                                                                        // 32
          ),                                                                                                    // 32
          " "                                                                                                   // 32
        ),                                                                                                      // 32
        React.createElement(                                                                                    // 33
          "div",                                                                                                // 33
          null,                                                                                                 // 33
          " ",                                                                                                  // 33
          React.createElement("img", {                                                                          // 33
            onClick: this.redirect.bind(this),                                                                  // 33
            style: image,                                                                                       // 33
            className: "colonna",                                                                               // 33
            src: "./1.jpeg"                                                                                     // 33
          }),                                                                                                   // 33
          React.createElement(                                                                                  // 33
            "h4",                                                                                               // 33
            {                                                                                                   // 33
              className: "itemTitle"                                                                            // 33
            },                                                                                                  // 33
            "ProFlow Mat | Price : $100"                                                                        // 33
          ),                                                                                                    // 33
          " "                                                                                                   // 33
        ),                                                                                                      // 33
        React.createElement(                                                                                    // 34
          "div",                                                                                                // 34
          null,                                                                                                 // 34
          " ",                                                                                                  // 34
          React.createElement("img", {                                                                          // 34
            onClick: this.redirect.bind(this),                                                                  // 34
            style: image,                                                                                       // 34
            className: "colonna",                                                                               // 34
            src: "./1.jpeg"                                                                                     // 34
          }),                                                                                                   // 34
          React.createElement(                                                                                  // 34
            "h4",                                                                                               // 34
            {                                                                                                   // 34
              className: "itemTitle"                                                                            // 34
            },                                                                                                  // 34
            "ProFlow Mat | Price : $100"                                                                        // 34
          ),                                                                                                    // 34
          " "                                                                                                   // 34
        ),                                                                                                      // 34
        React.createElement(                                                                                    // 35
          "div",                                                                                                // 35
          null,                                                                                                 // 35
          " ",                                                                                                  // 35
          React.createElement("img", {                                                                          // 35
            onClick: this.redirect.bind(this),                                                                  // 35
            style: image,                                                                                       // 35
            className: "colonna",                                                                               // 35
            src: "./1.jpeg"                                                                                     // 35
          }),                                                                                                   // 35
          React.createElement(                                                                                  // 35
            "h4",                                                                                               // 35
            {                                                                                                   // 35
              className: "itemTitle"                                                                            // 35
            },                                                                                                  // 35
            "ProFlow Mat | Price : $100"                                                                        // 35
          ),                                                                                                    // 35
          " "                                                                                                   // 35
        )                                                                                                       // 35
      );                                                                                                        // 28
    }                                                                                                           // 40
                                                                                                                //
    return render;                                                                                              //
  }();                                                                                                          //
                                                                                                                //
  return Images;                                                                                                //
}(React.Component);                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ItemComp.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/ItemComp.jsx                                                                                         //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                   //
                                                                                                                //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                          //
                                                                                                                //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                     //
                                                                                                                //
var _inherits3 = _interopRequireDefault(_inherits2);                                                            //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
module.export({                                                                                                 // 1
  "default": function () {                                                                                      // 1
    return ItemComp;                                                                                            // 1
  }                                                                                                             // 1
});                                                                                                             // 1
var React = void 0;                                                                                             // 1
module.watch(require("react"), {                                                                                // 1
  "default": function (v) {                                                                                     // 1
    React = v;                                                                                                  // 1
  }                                                                                                             // 1
}, 0);                                                                                                          // 1
var Cart = void 0;                                                                                              // 1
module.watch(require("./Cart"), {                                                                               // 1
  "default": function (v) {                                                                                     // 1
    Cart = v;                                                                                                   // 1
  }                                                                                                             // 1
}, 1);                                                                                                          // 1
var Footer = void 0;                                                                                            // 1
module.watch(require("./Footer"), {                                                                             // 1
  "default": function (v) {                                                                                     // 1
    Footer = v;                                                                                                 // 1
  }                                                                                                             // 1
}, 2);                                                                                                          // 1
var HomeHeader = void 0;                                                                                        // 1
module.watch(require("./HomeHeader"), {                                                                         // 1
  "default": function (v) {                                                                                     // 1
    HomeHeader = v;                                                                                             // 1
  }                                                                                                             // 1
}, 3);                                                                                                          // 1
var Images = void 0;                                                                                            // 1
module.watch(require("./Images"), {                                                                             // 1
  "default": function (v) {                                                                                     // 1
    Images = v;                                                                                                 // 1
  }                                                                                                             // 1
}, 4);                                                                                                          // 1
var MenuExampleSecondary = void 0;                                                                              // 1
module.watch(require("./Menu"), {                                                                               // 1
  "default": function (v) {                                                                                     // 1
    MenuExampleSecondary = v;                                                                                   // 1
  }                                                                                                             // 1
}, 5);                                                                                                          // 1
                                                                                                                //
var ItemComp = function (_React$Component) {                                                                    //
  (0, _inherits3.default)(ItemComp, _React$Component);                                                          //
                                                                                                                //
  function ItemComp() {                                                                                         //
    (0, _classCallCheck3.default)(this, ItemComp);                                                              //
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));             //
  }                                                                                                             //
                                                                                                                //
  ItemComp.prototype.render = function () {                                                                     //
    function render() {                                                                                         //
      return React.createElement(                                                                               // 15
        "div",                                                                                                  // 17
        {                                                                                                       // 17
          className: "full container"                                                                           // 17
        },                                                                                                      // 17
        React.createElement(MenuExampleSecondary, {                                                             // 18
          history: this.props.history                                                                           // 18
        }),                                                                                                     // 18
        React.createElement(HomeHeader, null),                                                                  // 19
        React.createElement(Images, {                                                                           // 20
          history: this.props.history                                                                           // 20
        }),                                                                                                     // 20
        React.createElement(Footer, null)                                                                       // 22
      );                                                                                                        // 17
    }                                                                                                           // 25
                                                                                                                //
    return render;                                                                                              //
  }();                                                                                                          //
                                                                                                                //
  return ItemComp;                                                                                              //
}(React.Component);                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ItemDescription.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/ItemDescription.jsx                                                                                  //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                   //
                                                                                                                //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                          //
                                                                                                                //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                     //
                                                                                                                //
var _inherits3 = _interopRequireDefault(_inherits2);                                                            //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
module.export({                                                                                                 // 1
  "default": function () {                                                                                      // 1
    return ItemDescription;                                                                                     // 1
  }                                                                                                             // 1
});                                                                                                             // 1
var React = void 0;                                                                                             // 1
module.watch(require("react"), {                                                                                // 1
  "default": function (v) {                                                                                     // 1
    React = v;                                                                                                  // 1
  }                                                                                                             // 1
}, 0);                                                                                                          // 1
var Images = void 0;                                                                                            // 1
module.watch(require("./Images"), {                                                                             // 1
  "default": function (v) {                                                                                     // 1
    Images = v;                                                                                                 // 1
  }                                                                                                             // 1
}, 1);                                                                                                          // 1
var HomeHeader = void 0;                                                                                        // 1
module.watch(require("./HomeHeader"), {                                                                         // 1
  "default": function (v) {                                                                                     // 1
    HomeHeader = v;                                                                                             // 1
  }                                                                                                             // 1
}, 2);                                                                                                          // 1
var Footer = void 0;                                                                                            // 1
module.watch(require("./Footer"), {                                                                             // 1
  "default": function (v) {                                                                                     // 1
    Footer = v;                                                                                                 // 1
  }                                                                                                             // 1
}, 3);                                                                                                          // 1
var Menu = void 0;                                                                                              // 1
module.watch(require("./Menu"), {                                                                               // 1
  "default": function (v) {                                                                                     // 1
    Menu = v;                                                                                                   // 1
  }                                                                                                             // 1
}, 4);                                                                                                          // 1
var ItemDetails = void 0;                                                                                       // 1
module.watch(require("./ItemDetails"), {                                                                        // 1
  "default": function (v) {                                                                                     // 1
    ItemDetails = v;                                                                                            // 1
  }                                                                                                             // 1
}, 5);                                                                                                          // 1
                                                                                                                //
var ItemDescription = function (_React$Component) {                                                             //
  (0, _inherits3.default)(ItemDescription, _React$Component);                                                   //
                                                                                                                //
  function ItemDescription() {                                                                                  //
    (0, _classCallCheck3.default)(this, ItemDescription);                                                       //
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));             //
  }                                                                                                             //
                                                                                                                //
  ItemDescription.prototype.render = function () {                                                              //
    function render() {                                                                                         //
      return React.createElement(                                                                               // 14
        "div",                                                                                                  // 16
        {                                                                                                       // 16
          className: "full container"                                                                           // 16
        },                                                                                                      // 16
        React.createElement(Menu, {                                                                             // 17
          history: this.props.history                                                                           // 17
        }),                                                                                                     // 17
        React.createElement(HomeHeader, null),                                                                  // 18
        React.createElement(ItemDetails, null),                                                                 // 19
        React.createElement(Footer, null)                                                                       // 20
      );                                                                                                        // 16
    }                                                                                                           // 23
                                                                                                                //
    return render;                                                                                              //
  }();                                                                                                          //
                                                                                                                //
  return ItemDescription;                                                                                       //
}(React.Component);                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ItemDetails.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/ItemDetails.jsx                                                                                      //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                   //
                                                                                                                //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                          //
                                                                                                                //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                     //
                                                                                                                //
var _inherits3 = _interopRequireDefault(_inherits2);                                                            //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
module.export({                                                                                                 // 1
  "default": function () {                                                                                      // 1
    return ImageExampleFloated;                                                                                 // 1
  }                                                                                                             // 1
});                                                                                                             // 1
var React = void 0;                                                                                             // 1
module.watch(require("react"), {                                                                                // 1
  "default": function (v) {                                                                                     // 1
    React = v;                                                                                                  // 1
  }                                                                                                             // 1
}, 0);                                                                                                          // 1
var Segment = void 0,                                                                                           // 1
    Image = void 0;                                                                                             // 1
module.watch(require("semantic-ui-react"), {                                                                    // 1
  Segment: function (v) {                                                                                       // 1
    Segment = v;                                                                                                // 1
  },                                                                                                            // 1
  Image: function (v) {                                                                                         // 1
    Image = v;                                                                                                  // 1
  }                                                                                                             // 1
}, 1);                                                                                                          // 1
var MenuExampleSecondary = void 0;                                                                              // 1
module.watch(require("./Menu"), {                                                                               // 1
  "default": function (v) {                                                                                     // 1
    MenuExampleSecondary = v;                                                                                   // 1
  }                                                                                                             // 1
}, 2);                                                                                                          // 1
var Footer = void 0;                                                                                            // 1
module.watch(require("./Footer"), {                                                                             // 1
  "default": function (v) {                                                                                     // 1
    Footer = v;                                                                                                 // 1
  }                                                                                                             // 1
}, 3);                                                                                                          // 1
var src = './1.jpeg';                                                                                           // 6
var src2 = './3.jpg';                                                                                           // 7
var src3 = './2.jpg';                                                                                           // 8
                                                                                                                //
var ImageExampleFloated = function (_React$Component) {                                                         //
  (0, _inherits3.default)(ImageExampleFloated, _React$Component);                                               //
                                                                                                                //
  function ImageExampleFloated() {                                                                              //
    (0, _classCallCheck3.default)(this, ImageExampleFloated);                                                   //
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));             //
  }                                                                                                             //
                                                                                                                //
  ImageExampleFloated.prototype.render = function () {                                                          //
    function render() {                                                                                         //
      return React.createElement(                                                                               // 13
        "div",                                                                                                  // 14
        null,                                                                                                   // 14
        React.createElement(                                                                                    // 16
          Segment,                                                                                              // 16
          null,                                                                                                 // 16
          React.createElement(                                                                                  // 19
            "div",                                                                                              // 19
            {                                                                                                   // 19
              "class": "ui mobile reversed equal width grid"                                                    // 19
            },                                                                                                  // 19
            React.createElement(                                                                                // 20
              "div",                                                                                            // 20
              {                                                                                                 // 20
                "class": "column"                                                                               // 20
              },                                                                                                // 20
              React.createElement(                                                                              // 21
                "h4",                                                                                           // 21
                {                                                                                               // 21
                  className: "itemTitle"                                                                        // 21
                },                                                                                              // 21
                "ProFlow Mat | Price : $100"                                                                    // 21
              ),                                                                                                // 21
              React.createElement(Image, {                                                                      // 22
                className: "checkOutImage",                                                                     // 22
                src: src,                                                                                       // 22
                size: "small",                                                                                  // 22
                floated: "left"                                                                                 // 22
              }),                                                                                               // 22
              React.createElement(Image, {                                                                      // 23
                className: "checkOutImage",                                                                     // 23
                src: src2,                                                                                      // 23
                size: "small",                                                                                  // 23
                floated: "left"                                                                                 // 23
              }),                                                                                               // 23
              React.createElement(Image, {                                                                      // 24
                className: "checkOutImage",                                                                     // 24
                src: src3,                                                                                      // 24
                size: "small",                                                                                  // 24
                floated: "left"                                                                                 // 24
              })                                                                                                // 24
            ),                                                                                                  // 20
            React.createElement(                                                                                // 28
              "div",                                                                                            // 28
              {                                                                                                 // 28
                "class": "column"                                                                               // 28
              },                                                                                                // 28
              React.createElement(                                                                              // 29
                "h4",                                                                                           // 29
                {                                                                                               // 29
                  className: "itemTitle"                                                                        // 29
                },                                                                                              // 29
                "Overview"                                                                                      // 29
              ),                                                                                                // 29
              React.createElement(                                                                              // 30
                "p",                                                                                            // 30
                null,                                                                                           // 30
                "This yoga mat is sure to  impress. With its high density cushion, joint protection it is sure to provide unmatched support. It is guranteed to never wear out from your practice. Closed cell surface prevents sweat from seeping into the mat and breeding bacteria. Sustainable engineering ensures high quality material will never peel, flake, or fade. Materials are made with non toxic, emission free manufacturing, it is latex free also. This yoga mat is sure to  impress. With its high density cushion, joint protection it is sure to provide unmatched support. It is guranteed to never wear out from your practice. Closed cell surface prevents sweat from seeping into the mat and breeding bacteria. Sustainable engineering ensures high quality material will never peel, flake, or fade. Materials are made with non toxic, emission free manufacturing, it is latex free also."
              )                                                                                                 // 30
            ),                                                                                                  // 28
            React.createElement(                                                                                // 39
              "div",                                                                                            // 39
              {                                                                                                 // 39
                "class": "column"                                                                               // 39
              },                                                                                                // 39
              React.createElement(                                                                              // 40
                "h4",                                                                                           // 40
                {                                                                                               // 40
                  className: "itemTitle"                                                                        // 40
                },                                                                                              // 40
                "Features"                                                                                      // 40
              ),                                                                                                // 40
              React.createElement(                                                                              // 41
                "ul",                                                                                           // 41
                null,                                                                                           // 41
                React.createElement(                                                                            // 42
                  "li",                                                                                         // 42
                  null,                                                                                         // 42
                  "Standard: 1.8 kg; 180 cm x 61 cm; 5 mm thick "                                               // 42
                ),                                                                                              // 42
                React.createElement(                                                                            // 43
                  "li",                                                                                         // 43
                  null,                                                                                         // 43
                  "Long: 2.3 kg; 200 cm x 61 cm; 5 mm thick "                                                   // 43
                ),                                                                                              // 43
                React.createElement(                                                                            // 44
                  "li",                                                                                         // 44
                  null,                                                                                         // 44
                  "High performance in a lightweight form. "                                                    // 44
                ),                                                                                              // 44
                React.createElement(                                                                            // 45
                  "li",                                                                                         // 45
                  null,                                                                                         // 45
                  "Superior wear and longevity backed by a Lifetime Guarantee. "                                // 45
                ),                                                                                              // 45
                React.createElement(                                                                            // 46
                  "li",                                                                                         // 46
                  null,                                                                                         // 46
                  "Closed-cell surface to keep moisture and sweat from seeping into the mat and breeding bacteria (ideal for hot yoga). "
                ),                                                                                              // 46
                React.createElement(                                                                            // 47
                  "li",                                                                                         // 47
                  null,                                                                                         // 47
                  "High-density cushion for unparalleled experience, joint protection, and versatility on any surface (carpet, cement, hardwood floors). "
                ),                                                                                              // 47
                React.createElement(                                                                            // 48
                  "li",                                                                                         // 48
                  null,                                                                                         // 48
                  "Fabric-like surface finish for optimal movement between poses. "                             // 48
                )                                                                                               // 48
              )                                                                                                 // 41
            )                                                                                                   // 39
          ),                                                                                                    // 19
          React.createElement(                                                                                  // 54
            "div",                                                                                              // 54
            {                                                                                                   // 54
              className: "button"                                                                               // 54
            },                                                                                                  // 54
            React.createElement(                                                                                // 55
              "button",                                                                                         // 55
              {                                                                                                 // 55
                className: "ui button",                                                                         // 55
                tabindex: "0"                                                                                   // 55
              },                                                                                                // 55
              "Check Out"                                                                                       // 55
            )                                                                                                   // 55
          )                                                                                                     // 54
        )                                                                                                       // 16
      );                                                                                                        // 14
    }                                                                                                           // 62
                                                                                                                //
    return render;                                                                                              //
  }();                                                                                                          //
                                                                                                                //
  return ImageExampleFloated;                                                                                   //
}(React.Component);                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Menu.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/Menu.jsx                                                                                             //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                   //
                                                                                                                //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                          //
                                                                                                                //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                     //
                                                                                                                //
var _inherits3 = _interopRequireDefault(_inherits2);                                                            //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
module.export({                                                                                                 // 1
  "default": function () {                                                                                      // 1
    return MenuExampleSecondary;                                                                                // 1
  }                                                                                                             // 1
});                                                                                                             // 1
var React = void 0,                                                                                             // 1
    Component = void 0;                                                                                         // 1
module.watch(require("react"), {                                                                                // 1
  "default": function (v) {                                                                                     // 1
    React = v;                                                                                                  // 1
  },                                                                                                            // 1
  Component: function (v) {                                                                                     // 1
    Component = v;                                                                                              // 1
  }                                                                                                             // 1
}, 0);                                                                                                          // 1
var Input = void 0,                                                                                             // 1
    Menu = void 0;                                                                                              // 1
module.watch(require("semantic-ui-react"), {                                                                    // 1
  Input: function (v) {                                                                                         // 1
    Input = v;                                                                                                  // 1
  },                                                                                                            // 1
  Menu: function (v) {                                                                                          // 1
    Menu = v;                                                                                                   // 1
  }                                                                                                             // 1
}, 1);                                                                                                          // 1
var AccountsUI = void 0;                                                                                        // 1
module.watch(require("../client/AccountsUI.jsx"), {                                                             // 1
  "default": function (v) {                                                                                     // 1
    AccountsUI = v;                                                                                             // 1
  }                                                                                                             // 1
}, 2);                                                                                                          // 1
                                                                                                                //
var MenuExampleSecondary = function (_Component) {                                                              //
  (0, _inherits3.default)(MenuExampleSecondary, _Component);                                                    //
                                                                                                                //
  function MenuExampleSecondary() {                                                                             //
    var _temp, _this, _ret;                                                                                     //
                                                                                                                //
    (0, _classCallCheck3.default)(this, MenuExampleSecondary);                                                  //
                                                                                                                //
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {                      //
      args[_key] = arguments[_key];                                                                             //
    }                                                                                                           //
                                                                                                                //
    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      activeItem: 'home'                                                                                        // 7
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);                                           // 7
  }                                                                                                             //
                                                                                                                //
  MenuExampleSecondary.prototype.redirect = function () {                                                       //
    function redirect() {                                                                                       //
      this.props.history.push("/Cart");                                                                         // 13
    }                                                                                                           // 14
                                                                                                                //
    return redirect;                                                                                            //
  }();                                                                                                          //
                                                                                                                //
  MenuExampleSecondary.prototype.redirect2 = function () {                                                      //
    function redirect2() {                                                                                      //
      this.props.history.push("/Home");                                                                         // 19
    }                                                                                                           // 20
                                                                                                                //
    return redirect2;                                                                                           //
  }();                                                                                                          //
                                                                                                                //
  MenuExampleSecondary.prototype.redirect3 = function () {                                                      //
    function redirect3() {                                                                                      //
      this.props.history.push("/AdminArea");                                                                    // 25
    }                                                                                                           // 26
                                                                                                                //
    return redirect3;                                                                                           //
  }();                                                                                                          //
                                                                                                                //
  MenuExampleSecondary.prototype.render = function () {                                                         //
    function render() {                                                                                         //
      var activeItem = this.state.activeItem;                                                                   // 30
      return React.createElement(                                                                               // 33
        "div",                                                                                                  // 34
        {                                                                                                       // 34
          className: "secondaryMenu"                                                                            // 34
        },                                                                                                      // 34
        React.createElement(                                                                                    // 35
          Menu,                                                                                                 // 35
          {                                                                                                     // 35
            secondary: true                                                                                     // 35
          },                                                                                                    // 35
          React.createElement(                                                                                  // 36
            Menu.Item,                                                                                          // 36
            null,                                                                                               // 36
            React.createElement(AccountsUI, null)                                                               // 37
          ),                                                                                                    // 36
          React.createElement(Menu.Item, {                                                                      // 39
            name: "home",                                                                                       // 39
            active: activeItem === 'home',                                                                      // 39
            onClick: this.redirect2.bind(this)                                                                  // 39
          }),                                                                                                   // 39
          React.createElement(Menu.Item, {                                                                      // 40
            name: "cart",                                                                                       // 40
            active: activeItem === 'cart',                                                                      // 40
            onClick: this.redirect.bind(this)                                                                   // 40
          }),                                                                                                   // 40
          React.createElement(Menu.Item, {                                                                      // 41
            name: "profile",                                                                                    // 41
            active: activeItem === 'profile',                                                                   // 41
            onClick: this.redirect3.bind(this)                                                                  // 41
          }),                                                                                                   // 41
          React.createElement(                                                                                  // 43
            Menu.Menu,                                                                                          // 43
            {                                                                                                   // 43
              position: "right"                                                                                 // 43
            },                                                                                                  // 43
            React.createElement(                                                                                // 44
              Menu.Item,                                                                                        // 44
              null,                                                                                             // 44
              React.createElement(Input, {                                                                      // 45
                className: "searchBar",                                                                         // 45
                icon: "search",                                                                                 // 45
                placeholder: "Search..."                                                                        // 45
              })                                                                                                // 45
            ),                                                                                                  // 44
            React.createElement(Menu.Item, null)                                                                // 48
          )                                                                                                     // 43
        )                                                                                                       // 35
      );                                                                                                        // 34
    }                                                                                                           // 56
                                                                                                                //
    return render;                                                                                              //
  }();                                                                                                          //
                                                                                                                //
  return MenuExampleSecondary;                                                                                  //
}(Component);                                                                                                   //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ShippingInformation.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/ShippingInformation.jsx                                                                              //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                   //
                                                                                                                //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                          //
                                                                                                                //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                     //
                                                                                                                //
var _inherits3 = _interopRequireDefault(_inherits2);                                                            //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
module.export({                                                                                                 // 1
  "default": function () {                                                                                      // 1
    return ShippingInformation;                                                                                 // 1
  }                                                                                                             // 1
});                                                                                                             // 1
var React = void 0;                                                                                             // 1
module.watch(require("react"), {                                                                                // 1
  "default": function (v) {                                                                                     // 1
    React = v;                                                                                                  // 1
  }                                                                                                             // 1
}, 0);                                                                                                          // 1
                                                                                                                //
var ShippingInformation = function (_React$Component) {                                                         //
  (0, _inherits3.default)(ShippingInformation, _React$Component);                                               //
                                                                                                                //
  function ShippingInformation() {                                                                              //
    (0, _classCallCheck3.default)(this, ShippingInformation);                                                   //
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));             //
  }                                                                                                             //
                                                                                                                //
  ShippingInformation.prototype.render = function () {                                                          //
    function render() {                                                                                         //
      return React.createElement(                                                                               // 10
        "div",                                                                                                  // 13
        {                                                                                                       // 13
          className: "ui form"                                                                                  // 13
        },                                                                                                      // 13
        React.createElement(                                                                                    // 14
          "h4",                                                                                                 // 14
          {                                                                                                     // 14
            className: "ui dividing header"                                                                     // 14
          },                                                                                                    // 14
          "Complete Your Order"                                                                                 // 14
        ),                                                                                                      // 14
        React.createElement(                                                                                    // 15
          "div",                                                                                                // 15
          {                                                                                                     // 15
            className: "field"                                                                                  // 15
          },                                                                                                    // 15
          React.createElement(                                                                                  // 16
            "label",                                                                                            // 16
            null,                                                                                               // 16
            "Name"                                                                                              // 16
          ),                                                                                                    // 16
          React.createElement(                                                                                  // 17
            "div",                                                                                              // 17
            {                                                                                                   // 17
              className: "two fields"                                                                           // 17
            },                                                                                                  // 17
            React.createElement(                                                                                // 18
              "div",                                                                                            // 18
              {                                                                                                 // 18
                className: "field"                                                                              // 18
              },                                                                                                // 18
              React.createElement("input", {                                                                    // 19
                type: "text",                                                                                   // 19
                name: "shipping[first-name]",                                                                   // 19
                placeholder: "First Name"                                                                       // 19
              })                                                                                                // 19
            ),                                                                                                  // 18
            React.createElement(                                                                                // 21
              "div",                                                                                            // 21
              {                                                                                                 // 21
                className: "field"                                                                              // 21
              },                                                                                                // 21
              React.createElement("input", {                                                                    // 22
                type: "text",                                                                                   // 22
                name: "shipping[last-name]",                                                                    // 22
                placeholder: "Last Name"                                                                        // 22
              })                                                                                                // 22
            )                                                                                                   // 21
          )                                                                                                     // 17
        ),                                                                                                      // 15
        React.createElement(                                                                                    // 26
          "div",                                                                                                // 26
          {                                                                                                     // 26
            className: "field"                                                                                  // 26
          },                                                                                                    // 26
          React.createElement(                                                                                  // 27
            "label",                                                                                            // 27
            null,                                                                                               // 27
            "Shipping Address"                                                                                  // 27
          ),                                                                                                    // 27
          React.createElement(                                                                                  // 28
            "div",                                                                                              // 28
            {                                                                                                   // 28
              className: "fields"                                                                               // 28
            },                                                                                                  // 28
            React.createElement(                                                                                // 29
              "div",                                                                                            // 29
              {                                                                                                 // 29
                className: "twelve wide field"                                                                  // 29
              },                                                                                                // 29
              React.createElement("input", {                                                                    // 30
                type: "text",                                                                                   // 30
                name: "shipping[address]",                                                                      // 30
                placeholder: "Street Address"                                                                   // 30
              })                                                                                                // 30
            ),                                                                                                  // 29
            React.createElement(                                                                                // 32
              "div",                                                                                            // 32
              {                                                                                                 // 32
                className: "four wide field"                                                                    // 32
              },                                                                                                // 32
              React.createElement("input", {                                                                    // 33
                type: "text",                                                                                   // 33
                name: "shipping[address-2]",                                                                    // 33
                placeholder: "Apt #"                                                                            // 33
              })                                                                                                // 33
            )                                                                                                   // 32
          )                                                                                                     // 28
        )                                                                                                       // 26
      );                                                                                                        // 13
    }                                                                                                           // 42
                                                                                                                //
    return render;                                                                                              //
  }();                                                                                                          //
                                                                                                                //
  return ShippingInformation;                                                                                   //
}(React.Component);                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"routes.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/routes.jsx                                                                                           //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.export({                                                                                                 // 1
  routes: function () {                                                                                         // 1
    return routes;                                                                                              // 1
  }                                                                                                             // 1
});                                                                                                             // 1
var React = void 0;                                                                                             // 1
module.watch(require("react"), {                                                                                // 1
  "default": function (v) {                                                                                     // 1
    React = v;                                                                                                  // 1
  }                                                                                                             // 1
}, 0);                                                                                                          // 1
var Router = void 0,                                                                                            // 1
    Route = void 0;                                                                                             // 1
module.watch(require("react-router-dom"), {                                                                     // 1
  BrowserRouter: function (v) {                                                                                 // 1
    Router = v;                                                                                                 // 1
  },                                                                                                            // 1
  Route: function (v) {                                                                                         // 1
    Route = v;                                                                                                  // 1
  }                                                                                                             // 1
}, 1);                                                                                                          // 1
var ItemComp = void 0;                                                                                          // 1
module.watch(require("./ItemComp"), {                                                                           // 1
  "default": function (v) {                                                                                     // 1
    ItemComp = v;                                                                                               // 1
  }                                                                                                             // 1
}, 2);                                                                                                          // 1
var Cart = void 0;                                                                                              // 1
module.watch(require("./Cart"), {                                                                               // 1
  "default": function (v) {                                                                                     // 1
    Cart = v;                                                                                                   // 1
  }                                                                                                             // 1
}, 3);                                                                                                          // 1
var CheckOutPage = void 0;                                                                                      // 1
module.watch(require("./CheckOutPage"), {                                                                       // 1
  "default": function (v) {                                                                                     // 1
    CheckOutPage = v;                                                                                           // 1
  }                                                                                                             // 1
}, 4);                                                                                                          // 1
var AdminArea = void 0;                                                                                         // 1
module.watch(require("./auth/AdminArea.jsx"), {                                                                 // 1
  "default": function (v) {                                                                                     // 1
    AdminArea = v;                                                                                              // 1
  }                                                                                                             // 1
}, 5);                                                                                                          // 1
var ItemDescription = void 0;                                                                                   // 1
module.watch(require("./ItemDescription"), {                                                                    // 1
  "default": function (v) {                                                                                     // 1
    ItemDescription = v;                                                                                        // 1
  }                                                                                                             // 1
}, 6);                                                                                                          // 1
                                                                                                                //
var routes = function () {                                                                                      // 10
  return React.createElement(                                                                                   // 10
    Router,                                                                                                     // 11
    null,                                                                                                       // 11
    React.createElement(                                                                                        // 12
      "div",                                                                                                    // 12
      null,                                                                                                     // 12
      React.createElement(Route, {                                                                              // 13
        exact: true,                                                                                            // 13
        path: "/Home",                                                                                          // 13
        component: ItemComp                                                                                     // 13
      }),                                                                                                       // 13
      React.createElement(Route, {                                                                              // 14
        exact: true,                                                                                            // 14
        path: "/Cart",                                                                                          // 14
        component: Cart                                                                                         // 14
      }),                                                                                                       // 14
      React.createElement(Route, {                                                                              // 15
        exact: true,                                                                                            // 15
        path: "/CheckOutPage",                                                                                  // 15
        component: CheckOutPage                                                                                 // 15
      }),                                                                                                       // 15
      React.createElement(Route, {                                                                              // 16
        exact: true,                                                                                            // 16
        path: "/AdminArea",                                                                                     // 16
        component: AdminArea                                                                                    // 16
      }),                                                                                                       // 16
      React.createElement(Route, {                                                                              // 17
        exact: true,                                                                                            // 17
        path: "/ItemDescription",                                                                               // 17
        component: ItemDescription                                                                              // 17
      })                                                                                                        // 17
    )                                                                                                           // 12
  );                                                                                                            // 11
};                                                                                                              // 10
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".jsx",
    ".css"
  ]
});
require("./client/template.main.js");
require("./client/AccountsUI.jsx");
require("./client/CountryList.js");
require("./client/main.js");