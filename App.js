import React from 'react'
import {View, Text} from 'react-native'
import {WebView} from 'react-native-webview'

//const epubRenderer = require('./renderer.html')
import epubRenderer from './renderer.html'

const useAsset = 'file:///android_asset/epub/'

const customHTML1 = `
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  <body>
    <h1 id="name">EPUB</h1>
    <script type="text/javascript" src="myscript.js"></script>
  </body>
</html>
`

const customHTML2 = `
<html>
  <head>
  </head>
  <body>
    <h1>CUSTOM 2</ht>
  </body>
</html>
`

const injectedJS = `
var imported = document.createElement('script');
imported.src = './myscript.js';
document.head.appendChild(imported);
`

const longHTML = `
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black" />
		<meta name="mobile-web-app-capable" content="yes" />
		<style type="text/css" title="Default">
			body, div, h1, h2, h3, span, p {
				font-family: Verdana,Arial,Helvetica,sans-serif;
			}
    </style>
    <script type="text/javascript" src="epub.js"></script>
	</head>
  <body>
    <h1>HTML</h1>
		<div id="area"></div>

		<script type="text/javascript">
      //var book = ePub("package.opf");
      //var rendition = book.renderTo("area", {width: 600, height: 400});
      //var displayed = rendition.display();
      alert('test2')
		</script>
	</body>
</html>`;

export default () => {
  return (
    <WebView
      style={{flex:1}}
      source={{uri:`${useAsset}index.html`,baseUrl:useAsset}}
      //source={{html:customHTML2}}
      //source={{html:longHTML,baseURL:'renderer/'}}
      originWhitelist={['*']}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      //injectedJavaScript={injectedJS}
      onError={event => {
        alert('error')
      }}
    />
  )

  return (
    <WebView
      style={{flex:1}}
      source={{uri:'file:///android_asset/renderer.html'}}
      originWhitelist={['*']}
      javaScriptEnabled={true}
      domStorageEnabled={true}
    />
  )
}