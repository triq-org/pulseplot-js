## Classes

<dl>
<dt><a href="#Pulseplot">Pulseplot</a></dt>
<dd><p>The main Pulseplot class.</p>
</dd>
</dl>

<a name="Pulseplot"></a>

## Pulseplot
The main Pulseplot class.

**Kind**: global class  

* [Pulseplot](#Pulseplot)
    * [new Pulseplot(options)](#new_Pulseplot_new)
    * _instance_
        * [.setTheme(options)](#Pulseplot+setTheme)
        * [.heightDefaults([height])](#Pulseplot+heightDefaults) ⇒ <code>Object</code>
        * [.enableScrollZoom()](#Pulseplot+enableScrollZoom)
        * [.disableScrollZoom()](#Pulseplot+disableScrollZoom)
        * [.destroy()](#Pulseplot+destroy)
        * [.setOption(opt, value)](#Pulseplot+setOption)
        * [.setOptions(opts)](#Pulseplot+setOptions)
        * [.setData(filedata)](#Pulseplot+setData)
    * _static_
        * [.slicerOptions](#Pulseplot.slicerOptions)
        * [.codingOptions](#Pulseplot.codingOptions)

<a name="new_Pulseplot_new"></a>

### new Pulseplot(options)
Initialize a new Pulseplot.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  |  |
| [options.width] | <code>number</code> | <code>0</code> | canvas width in px, 0 = auto |
| [options.height] | <code>number</code> | <code>150</code> | canvas height in px |
| [options.yHi] | <code>number</code> | <code>50</code> | Marks y-height |
| [options.yLo] | <code>number</code> | <code>100</code> | Spaces y-height |
| [options.yHintLo] | <code>number</code> | <code>115</code> | Hints y-bottom |
| [options.yHintHi] | <code>number</code> | <code>35</code> | Hints y-top |
| [options.yHintText] | <code>number</code> | <code>125</code> | Hints text y-offset |
| [options.scroll] | <code>number</code> | <code>0</code> | Initial scroll offset |
| [options.zoom] | <code>number</code> | <code>1</code> | Initial zoom factor |
| [options.slicer] | [<code>Slicers</code>](#Slicers) |  | Slicer to apply, unset = auto |
| options.parent | <code>string</code> \| <code>Object</code> |  | Container element or selector |
| [options.renderInfo] | <code>string</code> \| <code>Object</code> |  | Info element or selector |
| [options.theme] | <code>string</code> \| <code>Object</code> |  | Theme name or options, see [setTheme](setTheme) |

<a name="Pulseplot+setTheme"></a>

### pulseplot.setTheme(options)
Set a color theme.

**Kind**: instance method of [<code>Pulseplot</code>](#Pulseplot)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>string</code> \| <code>Object</code> |  | Theme name or theme options |
| [options.hiStroke] | <code>string</code> | <code>&quot;&#x27;#3c3&#x27;&quot;</code> | Mark stroke color |
| [options.hiFill] | <code>string</code> | <code>&quot;&#x27;rgba(51,204,51,0.1)&#x27;&quot;</code> | Mark fill color |
| [options.hiLine] | <code>number</code> | <code>3</code> | Mark line width |
| [options.hiDash] | <code>Array.&lt;number&gt;</code> | <code>[]</code> | Mark dash |
| [options.loStroke] | <code>string</code> | <code>&quot;&#x27;#c33&#x27;&quot;</code> | Space stroke color |
| [options.loFill] | <code>string</code> | <code>&quot;&#x27;rgba(204,204,204,0.1)&#x27;&quot;</code> | Space fill color |
| [options.loLine] | <code>number</code> | <code>3</code> | Space line width |
| [options.loDash] | <code>Array.&lt;number&gt;</code> | <code>[]</code> | Space dash |
| [options.edgeStroke] | <code>string</code> | <code>&quot;&#x27;#ccc&#x27;&quot;</code> | Edges stroke color |
| [options.edgeLine] | <code>number</code> | <code>1</code> | Edges line width |
| [options.edgeDash] | <code>Array.&lt;number&gt;</code> | <code>[]</code> | Edge dash |
| [options.textFill] | <code>string</code> | <code>&quot;&#x27;#666&#x27;&quot;</code> | Texts color |
| [options.dotFill] | <code>string</code> | <code>&quot;&#x27;#999&#x27;&quot;</code> | Dots color |
| [options.hintStroke] | <code>string</code> | <code>&quot;&#x27;#aaf&#x27;&quot;</code> | Hints stroke color |
| [options.hintDash] | <code>Array.&lt;number&gt;</code> | <code>[3, 2]</code> | Hints dash |
| [options.hintLine] | <code>number</code> | <code>1</code> | Hints line width |
| [options.hintAltStroke] | <code>string</code> | <code>&quot;&#x27;#f99&#x27;&quot;</code> | Error hints stroke color |
| [options.hintAltDash] | <code>Array.&lt;number&gt;</code> | <code>[3, 2]</code> | Error hints dash |
| [options.hintAltLine] | <code>number</code> | <code>3</code> | Error hints line width |
| [options.hintFill] | <code>string</code> | <code>&quot;&#x27;#448&#x27;&quot;</code> | Hints text color |
| [options.timeLabelFill] | <code>string</code> | <code>&quot;&#x27;#333&#x27;&quot;</code> | Time label text color |
| [options.timeMinorFill] | <code>string</code> | <code>&quot;&#x27;#CCC&#x27;&quot;</code> | Time minor tick color |
| [options.timeMajorFill] | <code>string</code> | <code>&quot;&#x27;#666&#x27;&quot;</code> | Time major tick color |
| [options.font] | <code>string</code> | <code>&quot;&#x27;10px sans-serif&#x27;&quot;</code> | Text font |

<a name="Pulseplot+heightDefaults"></a>

### pulseplot.heightDefaults([height]) ⇒ <code>Object</code>
Get all height options based on total height value.

**Kind**: instance method of [<code>Pulseplot</code>](#Pulseplot)  
**Returns**: <code>Object</code> - - All height option defaults  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [height] | <code>number</code> | <code>120</code> | Total height |

<a name="Pulseplot+enableScrollZoom"></a>

### pulseplot.enableScrollZoom()
Enables mouse and touch scroll zoom.

**Kind**: instance method of [<code>Pulseplot</code>](#Pulseplot)  
<a name="Pulseplot+disableScrollZoom"></a>

### pulseplot.disableScrollZoom()
Disables mouse and touch scroll zoom.

**Kind**: instance method of [<code>Pulseplot</code>](#Pulseplot)  
<a name="Pulseplot+destroy"></a>

### pulseplot.destroy()
Release all event handlers and resources.

**Kind**: instance method of [<code>Pulseplot</code>](#Pulseplot)  
<a name="Pulseplot+setOption"></a>

### pulseplot.setOption(opt, value)
Set an option on the Pulseplot to some value.

**Kind**: instance method of [<code>Pulseplot</code>](#Pulseplot)  

| Param | Type | Description |
| --- | --- | --- |
| opt | <code>string</code> | Option name, see [new](#new_Pulseplot_new) |
| value | <code>Object</code> | The new value for the option |

<a name="Pulseplot+setOptions"></a>

### pulseplot.setOptions(opts)
Set a number of options on the Pulseplot to some values.

**Kind**: instance method of [<code>Pulseplot</code>](#Pulseplot)  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>Object</code> | A key/value object of options to set, see [new](#new_Pulseplot_new) |

<a name="Pulseplot+setData"></a>

### pulseplot.setData(filedata)
Set new data on the Pulseplot.

**Kind**: instance method of [<code>Pulseplot</code>](#Pulseplot)  

| Param | Type | Description |
| --- | --- | --- |
| filedata | <code>string</code> \| <code>Object</code> | A URL string or File data object of `{ fileBuffer: ArrayBuffer, name: string, size: number, type: string }` |

<a name="Pulseplot.slicerOptions"></a>

### Pulseplot.slicerOptions
Get all possible slicer options.

**Kind**: static property of [<code>Pulseplot</code>](#Pulseplot)  
<a name="Pulseplot.codingOptions"></a>

### Pulseplot.codingOptions
Get all possible coding options.

**Kind**: static property of [<code>Pulseplot</code>](#Pulseplot)  
<a name="Slicers"></a>

## Slicers : <code>enum</code>
Possible slicer values.

**Kind**: global enum  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| PCM | <code>string</code> | <code>&quot;PCM&quot;</code> | 
| PWM | <code>string</code> | <code>&quot;PWM&quot;</code> | 
| PPM | <code>string</code> | <code>&quot;PPM&quot;</code> | 
| MC | <code>string</code> | <code>&quot;MC&quot;</code> | 
| DM | <code>string</code> | <code>&quot;DM&quot;</code> | 
| NRZI | <code>string</code> | <code>&quot;NRZI&quot;</code> | 
| CMI | <code>string</code> | <code>&quot;CMI&quot;</code> | 
| PIWM | <code>string</code> | <code>&quot;PIWM&quot;</code> | 

<a name="Codings"></a>

## Codings : <code>enum</code>
Possible coding values.

**Kind**: global enum  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| ManchesterGET | <code>string</code> | <code>&quot;Manchester-GET&quot;</code> | 
| ManchesterIEEE | <code>string</code> | <code>&quot;Manchester-IEEE&quot;</code> | 
| DifferentialManchester | <code>string</code> | <code>&quot;Differential-Manchester&quot;</code> | 

