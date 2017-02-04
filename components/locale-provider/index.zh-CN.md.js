webpackJsonp([163,211],{

/***/ 884:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "section",
	    [
	      "p",
	      "为组件内建文案提供统一的国际化支持。"
	    ],
	    [
	      "h2",
	      "使用"
	    ],
	    [
	      "p",
	      "LocaleProvider 使用 React 的 ",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "https://facebook.github.io/react/docs/context.html"
	        },
	        "context"
	      ],
	      " 特性，只需在应用外围包裹一次即可全局生效。"
	    ],
	    [
	      "pre",
	      {
	        "lang": "jsx",
	        "highlighted": "<span class=\"token keyword\">import</span> enUS <span class=\"token keyword\">from</span> <span class=\"token string\">'antd/lib/locale-provider/en_US'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token operator\">...</span>\n\n<span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>LocaleProvider</span> <span class=\"token attr-name\">locale</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>enUS<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>LocaleProvider</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>"
	      },
	      [
	        "code",
	        "import enUS from 'antd/lib/locale-provider/en_US';\n\n...\n\nreturn <LocaleProvider locale={enUS}><App /></LocaleProvider>;"
	      ]
	    ],
	    [
	      "p",
	      "我们提供了英语，中文，俄语，法语，德语等多种语言支持，所有语言包可以在 ",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "https://github.com/ant-design/ant-design/blob/master/components/locale-provider/"
	        },
	        "这里"
	      ],
	      " 找到。"
	    ],
	    [
	      "h3",
	      "增加语言包"
	    ],
	    [
	      "p",
	      "如果你找不到你需要的语言包，欢迎你在 ",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "https://github.com/ant-design/ant-design/blob/master/components/locale-provider/en_US.tsx"
	        },
	        "英文语言包"
	      ],
	      " 的基础上创建一个新的语言包，并给我们 Pull Request。"
	    ],
	    [
	      "h3",
	      "其他国际化需求"
	    ],
	    [
	      "p",
	      "本模块仅用于组件的内建文案，若有业务文案的国际化需求，建议使用 ",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "https://github.com/yahoo/react-intl"
	        },
	        "react-intl"
	      ],
	      "，可参考示例：",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "http://github.com/ant-design/intl-example"
	        },
	        "Intl demo 1"
	      ],
	      " 和 ",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "http://yiminghe.me/learning-react/examples/react-intl.html?locale=en-US"
	        },
	        "Intl demo 2"
	      ],
	      "。"
	    ]
	  ],
	  "meta": {
	    "category": "Components",
	    "subtitle": "国际化",
	    "cols": 1,
	    "type": "Other",
	    "title": "LocaleProvider",
	    "filename": "components/locale-provider/index.zh-CN.md"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#使用"
	        },
	        "使用"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#API"
	        },
	        "API"
	      ]
	    ]
	  ],
	  "api": [
	    "section",
	    [
	      "h2",
	      "API"
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "参数"
	          ],
	          [
	            "th",
	            "说明"
	          ],
	          [
	            "th",
	            "类型"
	          ],
	          [
	            "th",
	            "默认值"
	          ]
	        ]
	      ],
	      [
	        "tbody",
	        [
	          "tr",
	          [
	            "td",
	            "locale"
	          ],
	          [
	            "td",
	            "语言包配置，语言包可到 ",
	            [
	              "code",
	              "antd/lib/locale-provider/"
	            ],
	            " 目录下寻找"
	          ],
	          [
	            "td",
	            "object"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ]
	      ]
	    ]
	  ]
	};

/***/ }

});