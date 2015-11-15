var searchIndex = {};
searchIndex['gnuplot'] = {"items":[[0,"","gnuplot","A simple gnuplot controller.",null,null],[3,"Figure","","A figure that may contain multiple axes",null,null],[3,"Axes2D","","2D axes that is used for drawing 2D plots",null,null],[3,"Axes3D","","3D axes that is used for drawing 3D plots",null,null],[4,"Coordinate","","Specifies how to interpret the coordinate passed to a plotting command",null,null],[13,"Graph","","Coordinates are done relative to a graph (i.e. an axis set). (0, 0) is the bottom left corner and (1, 1) is the top right corner.\nYou'd use this to place labels and other objects so that they remain in the same place relative to the graph no matter what you have plotted.",0,null],[13,"Axis","","Coordinates match those on the axes. You'd use this to place labels and other objects relative to regions of interest in the graph (e.g. labeling the peak of a function)",0,null],[4,"PlotOption","","An enumeration of plot options you can supply to plotting commands, governing\nthings like line width, color and others",null,null],[13,"PointSymbol","","Sets the symbol used for points. The valid characters are as follows:",1,null],[13,"PointSize","","Sets the size of the points. The size acts as a multiplier, with 1.0 being the default.",1,null],[13,"Caption","","Sets the caption of the plot element. Set to empty to hide it from the legend.",1,null],[13,"LineWidth","","Sets the width of lines.",1,null],[13,"Color","","Sets the color of the plot element. The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white). This specifies the fill color of a filled plot.",1,null],[13,"BorderColor","","Sets the color of the border of a filled plot (if it has one). The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white).",1,null],[13,"LineStyle","","Sets the style of the line. Note that not all gnuplot terminals support dashed lines. See DashType for the available styles.",1,null],[13,"FillAlpha","","Sets the transparency of a filled plot. `0.0` - fully transparent, `1.0` - fully opaque",1,null],[13,"FillRegion","","Sets the fill region. See FillRegion for the available regions.",1,null],[13,"ArrowType","","Sets what an arrowhead looks like",1,null],[13,"ArrowSize","","Sets the size of the arrowhead. This is specified in the units of graph (i.e. `1.0` would make the arrow as big as the graph).",1,null],[4,"FillRegionType","","An enumeration of possible fill regions",null,null],[13,"Above","","",2,null],[13,"Below","","",2,null],[13,"Between","","",2,null],[4,"AlignType","","An enumeration of possible text and label alignments",null,null],[13,"AlignLeft","","",3,null],[13,"AlignRight","","",3,null],[13,"AlignCenter","","",3,null],[13,"AlignTop","","",3,null],[13,"AlignBottom","","",3,null],[4,"DashType","","An enumeration of possible dash styles",null,null],[13,"Solid","","",4,null],[13,"SmallDot","","",4,null],[13,"Dot","","",4,null],[13,"Dash","","",4,null],[13,"DotDash","","",4,null],[13,"DotDotDash","","",4,null],[4,"ArrowheadType","","An enumeration of possible arrow head styles",null,null],[13,"Open","","An arrow head shaped like a 'V'",5,null],[13,"Closed","","An arrow head shaped like an outlined triangle",5,null],[13,"Filled","","An arrow head shaped like a filled triangle",5,null],[13,"NoArrow","","No arrow head",5,null],[4,"AutoOption","","An enumeration of something that can either be fixed (e.g. the maximum of X values),\nor automatically determined",null,null],[13,"Fix","","Fixes the value to a specific value",6,null],[13,"Auto","","Lets the value scale automatically",6,null],[4,"LabelOption","","An enumeration of label options that control label attributes",null,null],[13,"TextOffset","","Sets the offset of the label in characters",7,null],[13,"Font","","Sets the font of the label. The string specifies the font type (e.g. \"Arial\") and the number specifies the size (the units are terminal dependent, but are often points)",7,null],[13,"TextColor","","Sets the color of the label text. The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white)",7,null],[13,"Rotate","","Rotates the label by a certain number of degrees",7,null],[13,"TextAlign","","Sets the horizontal alignment of the label text (default is left alignment). See AlignType.",7,null],[13,"MarkerSymbol","","Sets a marker for the label. By default no marker is drawn. The valid characters are as follows:",7,null],[13,"MarkerColor","","Sets the color of the marker. The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white)",7,null],[13,"MarkerSize","","Sets the size of the marker. The size acts as a multiplier, with 1.0 being the default.",7,null],[4,"TickOption","","An enumeration of axis tick options",null,null],[13,"OnAxis","","Specifies whether the ticks are drawn at the borders of the plot, or on the axis",8,null],[13,"Mirror","","If the axes are drawn on the border, this specifies whether to draw the ticks on the opposite border as well",8,null],[13,"Inward","","If the axes are drawn on the border, this specifies whether to draw the ticks pointing inward or outward",8,null],[13,"MinorScale","","Sets the scale of the minor ticks",8,null],[13,"MajorScale","","Sets the scale of the major ticks",8,null],[4,"Tick","","Specifies a type of axis tick",null,null],[13,"Major","","Major ticks have position and an optional label. The label may have a single C-style format specifier which will be replaced by the location of the tick",9,null],[13,"Minor","","Minor ticks only have position",9,null],[4,"BorderLocation2D","","Plot border locations",null,null],[13,"Bottom","","",10,null],[13,"Left","","",10,null],[13,"Top","","",10,null],[13,"Right","","",10,null],[4,"LegendOption","","Legend options",null,null],[13,"Reverse","","Puts curve samples to the left of the label",11,null],[13,"Invert","","Displays legend entries in opposite order",11,null],[13,"Horizontal","","Makes the legend horizontal (default is vertical)",11,null],[13,"Placement","","Specifies the location of the legend. The first argument specifies the horizontal\nplacement with respect to its position, and the second argument specifies the vertical placement",11,null],[13,"Title","","Title of the legend",11,null],[13,"MaxRows","","Specifies the maximum number of rows, when the legend is vertical",11,null],[13,"MaxCols","","Specifies the maximum number of columns, when the legend is horizontal",11,null],[4,"ContourStyle","","Specifies how the contours are drawn",null,null],[13,"Linear","","Draw lines between points of equal value",12,null],[13,"Cubic","","Draw somewhat smoother curves between points with equal value.",12,null],[13,"Spline","","Draw an even smoother curve, this time approximating the locations of\npoints with equal value (clamped to range from 2 to 100).",12,null],[4,"PaletteType","","Specifies what sort of palette to use",null,null],[13,"Gray","","Use a gray palette with a specified gamma",13,null],[13,"Formula","","Use a palette with that uses a predefined formula for each color component.\nEach formula is identified by an integer between [-36, 36]. See gnuplot documentation, or use the pre-defined constants.",13,null],[13,"CubeHelix","","Use a cube helix palette, with a certain start (in radians), cycles, saturation and gamma.",13,null],[11,"set_border","","Sets the properties of the plot border",14,null],[11,"set_x_axis","","Sets the properties of x axis.",14,null],[11,"set_y_axis","","Like `set_x_axis` but for the y axis.",14,null],[11,"arrow","","Adds an arrow to the plot. The arrow is drawn from `(x1, y1)` to `(x2, y2)` with the arrow point towards `(x2, y2)`.\n# Arguments\n* `x1` - X coordinate of the arrow start\n* `y1` - Y coordinate of the arrow start\n* `x2` - X coordinate of the arrow end\n* `y2` - Y coordinate of the arrow end\n* `options` - Array of PlotOption controlling the appearance of the arrowhead and arrow shaft. Relevant options are:\n     * `ArrowType` - Specifies the style of the arrow head (or an option to omit it)\n     * `ArrowSize` - Sets the size of the arrow head (in graph units)\n     * `Color` - Specifies the color of the arrow\n     * `LineStyle` - Specifies the style of the arrow shaft\n     * `LineWidth` - Specifies the width of the arrow shaft",14,null],[11,"set_legend","","Specifies the location and other properties of the legend\n# Arguments\n* `x` - X coordinate of the legend\n* `y` - Y coordinate of the legend\n* `label_options` - Array of LegendOption options\n* `text_options` - Array of LabelOption options specifying the appearance of the plot titles. Valid options are:\n    * `Font`\n    * `TextColor`\n    * `TextAlign(AlignLeft)`\n    * `TextAlign(AlignRight)`",14,null],[11,"lines","","Plot a 2D scatter-plot with lines connecting each data point\n# Arguments\n* `x` - x values\n* `y` - y values\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `LineWidth` - Sets the width of the line\n    * `LineStyle` - Sets the style of the line\n    * `Color` - Sets the color",14,null],[11,"points","","Plot a 2D scatter-plot with a point standing in for each data point\n# Arguments\n* `x` - x values\n* `y` - y values\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `PointSymbol` - Sets symbol for each point\n    * `PointSize` - Sets the size of each point\n    * `Color` - Sets the color",14,null],[11,"lines_points","","A combination of lines and points methods (drawn in that order).\n# Arguments\n* `x` - x values\n* `y` - y values\n* `options` - Array of PlotOption controlling the appearance of the plot element",14,null],[11,"x_error_lines","","Plot a 2D scatter-plot with a point standing in for each data point and lines connecting each data point.\nAdditionally, error bars are attached to each data point in the X direction.\n# Arguments\n* `x` - x values\n* `y` - y valuess\n* `x_error` - Errors associated with the x value\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `PointSymbol` - Sets symbol for each point\n    * `PointSize` - Sets the size of each point\n    * `LineWidth` - Sets the width of the line\n    * `LineStyle` - Sets the style of the line\n    * `Color` - Sets the color",14,null],[11,"y_error_lines","","Plot a 2D scatter-plot with a point standing in for each data point and lines connecting each data point.\nAdditionally, error bars are attached to each data point in the Y direction.\n# Arguments\n* `x` - x values\n* `y` - y values\n* `y_error` - Errors associated with the y values\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `PointSymbol` - Sets symbol for each point\n    * `PointSize` - Sets the size of each point\n    * `LineWidth` - Sets the width of the line\n    * `LineStyle` - Sets the style of the line\n    * `Color` - Sets the color",14,null],[11,"fill_between","","Plot a 2D scatter-plot of two curves (bound by `y_lo` and `y_hi`) with a filled region between them.\n`FillRegion` plot option can be used to control what happens when the curves intersect. If set to Above, then the `y_lo < y_hi` region is filled.\nIf set to Below, then the `y_lo > y_hi` region is filled. Otherwise both regions are filled.\n# Arguments\n* `x` - x values\n* `y_lo` - Bottom y values\n* `y_hi` - Top y values\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `FillRegion` - Specifies the region between the two curves to fill\n    * `Color` - Sets the color of the filled region\n    * `FillAlpha` - Sets the transparency of the filled region",14,null],[11,"boxes","","Plot a 2D scatter-plot using boxes of automatic width. Box widths are set so that there are no gaps between successive boxes (i.e. each box may have a different width).\nBoxes start at the x-axis and go towards the y value of the datapoint.\n# Arguments\n* `x` - x values (center of the box)\n* `y` - y values\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `LineWidth` - Sets the width of the border\n    * `LineStyle` - Sets the style of the border\n    * `BorderColor` - Sets the color of the border\n    * `Color` - Sets the color of the box fill\n    * `FillAlpha` - Sets the transparency of the box fill",14,null],[11,"boxes_set_width","","Plot a 2D scatter-plot using boxes of set (per box) width.\nBoxes start at the x-axis and go towards the y value of the datapoint.\n# Arguments\n* `x` - x values (center of the box)\n* `y` - y values\n* `w` - Box width values\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `LineWidth` - Sets the width of the border\n    * `LineStyle` - Sets the style of the border\n    * `BorderColor` - Sets the color of the border\n    * `Color` - Sets the color of the box fill\n    * `FillAlpha` - Sets the transparency of the box fill",14,null],[11,"image","","Draws an image from a rectangular array of data by connecting the individual datapoints with polygons.",14,null],[11,"surface","","Draws a 3D surface from a rectangular array of data by connecting the individual datapoints with polygons.",15,null],[11,"set_view","","Sets the 3D view.",15,{"inputs":[{"name":"axes3d"},{"name":"f64"},{"name":"f64"}],"output":{"name":"axes3d"}}],[11,"set_view_map","","Sets the view to be a map. Useful for images and contour plots.",15,{"inputs":[{"name":"axes3d"}],"output":{"name":"axes3d"}}],[11,"set_z_label","","Set the label for the Z axis",15,null],[11,"set_z_ticks","","Like `set_x_ticks` but for the Z axis.",15,null],[11,"set_z_ticks_custom","","Like `set_x_ticks_custom` but for the the Y axis.",15,null],[11,"set_z_range","","Set the range of values for the Z axis",15,{"inputs":[{"name":"axes3d"},{"name":"autooption"},{"name":"autooption"}],"output":{"name":"axes3d"}}],[11,"set_z_log","","Sets the Z axis be logarithmic. Note that the range must be non-negative for this to be valid.",15,{"inputs":[{"name":"axes3d"},{"name":"option"}],"output":{"name":"axes3d"}}],[11,"show_contours","","Show contours (lines of equal Z value) at automatically determined levels.",15,{"inputs":[{"name":"axes3d"},{"name":"bool"},{"name":"bool"},{"name":"contourstyle"},{"name":"autooption"},{"name":"autooption"}],"output":{"name":"axes3d"}}],[11,"show_contours_custom","","Show contours (lines of equal Z value) at specific levels.",15,{"inputs":[{"name":"axes3d"},{"name":"bool"},{"name":"bool"},{"name":"contourstyle"},{"name":"autooption"},{"name":"tc"}],"output":{"name":"axes3d"}}],[11,"new","","Creates a new figure",16,{"inputs":[{"name":"figure"}],"output":{"name":"figure"}}],[11,"set_terminal","","Sets the terminal for gnuplot to use, as well as the file to output the figure to.\nTerminals that spawn a GUI don't need an output file, so pass an empty string for those.",16,{"inputs":[{"name":"figure"},{"name":"str"},{"name":"str"}],"output":{"name":"figure"}}],[11,"axes2d","","Creates a set of 2D axes",16,{"inputs":[{"name":"figure"}],"output":{"name":"axes2d"}}],[11,"axes3d","","Creates a set of 3D axes",16,{"inputs":[{"name":"figure"}],"output":{"name":"axes3d"}}],[11,"show","","Launch a gnuplot process, if it hasn't been spawned already by a call to\nthis function, and display the figure on it.",16,{"inputs":[{"name":"figure"}],"output":{"name":"figure"}}],[11,"clear_axes","","Clears all axes on this figure.",16,{"inputs":[{"name":"figure"}],"output":{"name":"figure"}}],[11,"echo","","Echo the commands that if piped to a gnuplot process would display the figure\n# Arguments\n* `writer` - A function pointer that will be called multiple times with the command text and data",16,{"inputs":[{"name":"figure"},{"name":"t"}],"output":{"name":"figure"}}],[11,"echo_to_file","","Save to a file the the commands that if piped to a gnuplot process would display the figure\n# Arguments\n* `filename` - Name of the file",16,{"inputs":[{"name":"figure"},{"name":"str"}],"output":{"name":"figure"}}],[11,"clone","","",1,{"inputs":[{"name":"plotoption"}],"output":{"name":"plotoption"}}],[11,"clone","","",2,{"inputs":[{"name":"fillregiontype"}],"output":{"name":"fillregiontype"}}],[11,"clone","","",3,{"inputs":[{"name":"aligntype"}],"output":{"name":"aligntype"}}],[11,"clone","","",4,{"inputs":[{"name":"dashtype"}],"output":{"name":"dashtype"}}],[11,"to_int","","",4,{"inputs":[{"name":"dashtype"}],"output":{"name":"i32"}}],[11,"clone","","",5,{"inputs":[{"name":"arrowheadtype"}],"output":{"name":"arrowheadtype"}}],[11,"clone","","",6,{"inputs":[{"name":"autooption"}],"output":{"name":"autooption"}}],[11,"map","","Same as `Option::map`",6,{"inputs":[{"name":"autooption"},{"name":"f"}],"output":{"name":"autooption"}}],[11,"clone","","",7,{"inputs":[{"name":"labeloption"}],"output":{"name":"labeloption"}}],[11,"clone","","",8,{"inputs":[{"name":"tickoption"}],"output":{"name":"tickoption"}}],[11,"clone","","",10,{"inputs":[{"name":"borderlocation2d"}],"output":{"name":"borderlocation2d"}}],[11,"clone","","",11,{"inputs":[{"name":"legendoption"}],"output":{"name":"legendoption"}}],[11,"clone","","",12,{"inputs":[{"name":"contourstyle"}],"output":{"name":"contourstyle"}}],[11,"clone","","",13,{"inputs":[{"name":"palettetype"}],"output":{"name":"palettetype"}}],[11,"clone","","",0,{"inputs":[{"name":"coordinate"}],"output":{"name":"coordinate"}}],[11,"fmt","","",0,{"inputs":[{"name":"coordinate"},{"name":"formatter"}],"output":{"name":"result"}}],[17,"GRAY","","A gray palette",null,null],[17,"COLOR","","Default Gnuplot palette",null,null],[17,"RAINBOW","","Classic rainbow palette with terrible perceptual properties",null,null],[17,"HOT","","A black body palette",null,null],[17,"HELIX","","A nice default for a cube helix",null,null],[8,"DataType","","",null,null],[10,"get","","",17,{"inputs":[{"name":"datatype"}],"output":{"name":"f64"}}],[8,"AxesCommon","","",null,null],[11,"set_pos_grid","","Set the position of the axes on the figure using grid coordinates.\n# Arguments\n* `nrow` - Number of rows in the grid. Must be greater than 0.\n* `ncol` - Number of columns in the grid. Must be greater than 0.\n* `pos` - Which grid cell to place this axes in, counting from top-left corner,\n          going left and then down, starting at 0.",18,{"inputs":[{"name":"axescommon"},{"name":"u32"},{"name":"u32"},{"name":"u32"}],"output":{"name":"self"}}],[11,"set_pos","","Set the position of the axes on the figure using screen coordinates.\nThe coordinates refer to the bottom-left corner of the axes\n# Arguments\n* `x` - X position. Ranges from 0 to 1\n* `y` - Y position. Ranges from 0 to 1",18,{"inputs":[{"name":"axescommon"},{"name":"f64"},{"name":"f64"}],"output":{"name":"self"}}],[11,"set_size","","Set the size of the axes\n# Arguments\n* `w` - Width. Ranges from 0 to 1\n* `h` - Height. Ranges from 0 to 1",18,{"inputs":[{"name":"axescommon"},{"name":"f64"},{"name":"f64"}],"output":{"name":"self"}}],[11,"set_aspect_ratio","","Set the aspect ratio of the axes\n# Arguments\n* `ratio` - The aspect ratio. Set to Auto to return the ratio to default",18,{"inputs":[{"name":"axescommon"},{"name":"autooption"}],"output":{"name":"self"}}],[11,"set_x_label","","Set the label for the X axis\n# Arguments\n* `text` - Text of the label. Pass an empty string to hide the label\n* `options` - Array of LabelOption controlling the appearance of the label. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label",18,null],[11,"set_y_label","","Like `set_x_label`, but for the Y axis",18,null],[11,"set_cb_label","","Like `set_x_label`, but for the color bar",18,null],[11,"set_title","","Set the title for the axes\n# Arguments\n* `text` - Text of the title. Pass an empty string to hide the title\n* `options` - Array of LabelOption controlling the appearance of the title. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label",18,null],[11,"label","","Adds a label to the plot, with an optional marker.\n# Arguments\n* `text` - Text of the label\n* `x` - X coordinate of the label\n* `y` - Y coordinate of the label\n* `options` - Array of LabelOption controlling the appearance of the label. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label\n     * `MarkerSymbol` - Specifies the symbol for the marker. Omit to hide the marker\n     * `MarkerSize` - Specifies the size for the marker\n     * `MarkerColor` - Specifies the color for the marker",18,null],[11,"set_x_ticks","","Sets the properties of the ticks on the X axis.",18,null],[11,"set_y_ticks","","Like `set_x_ticks` but for the Y axis.",18,null],[11,"set_cb_ticks","","Like `set_x_ticks` but for the color bar axis.",18,null],[11,"set_x_ticks_custom","","Sets ticks on the X axis with specified labels at specified positions.",18,null],[11,"set_y_ticks_custom","","Like `set_x_ticks_custom` but for the the Y axis.",18,null],[11,"set_cb_ticks_custom","","Like `set_x_ticks_custom` but for the the color bar axis.",18,null],[11,"set_x_range","","Set the range of values for the X axis.",18,{"inputs":[{"name":"axescommon"},{"name":"autooption"},{"name":"autooption"}],"output":{"name":"self"}}],[11,"set_y_range","","Set the range of values for the Y axis.",18,{"inputs":[{"name":"axescommon"},{"name":"autooption"},{"name":"autooption"}],"output":{"name":"self"}}],[11,"set_cb_range","","Set the range of values for the color bar axis.",18,{"inputs":[{"name":"axescommon"},{"name":"autooption"},{"name":"autooption"}],"output":{"name":"self"}}],[11,"set_x_log","","Sets the X axis be logarithmic. Note that the range must be non-negative for this to be valid.",18,{"inputs":[{"name":"axescommon"},{"name":"option"}],"output":{"name":"self"}}],[11,"set_y_log","","Sets the Y axis be logarithmic. Note that the range must be non-negative for this to be valid.",18,{"inputs":[{"name":"axescommon"},{"name":"option"}],"output":{"name":"self"}}],[11,"set_cb_log","","Sets the color bar axis be logarithmic. Note that the range must be non-negative for this to be valid.",18,{"inputs":[{"name":"axescommon"},{"name":"option"}],"output":{"name":"self"}}],[11,"set_palette","","Sets the palette used for 3D surface and image plots",18,{"inputs":[{"name":"axescommon"},{"name":"palettetype"}],"output":{"name":"self"}}],[11,"set_custom_palette","","Sets a custom palette used for 3D surface and image plots. A custom palette\nis specified by a sequence of 4-tuples (with at least one element). The first\nelement is the grayscale value that is mapped to the remaining three elements\nwhich specify the red, green and blue components of the color.\nThe grayscale values must be non-decreasing. All values must range from 0 to 1.",18,{"inputs":[{"name":"axescommon"},{"name":"t"}],"output":{"name":"self"}}],[11,"set_pos_grid","","Set the position of the axes on the figure using grid coordinates.\n# Arguments\n* `nrow` - Number of rows in the grid. Must be greater than 0.\n* `ncol` - Number of columns in the grid. Must be greater than 0.\n* `pos` - Which grid cell to place this axes in, counting from top-left corner,\n          going left and then down, starting at 0.",18,{"inputs":[{"name":"axescommon"},{"name":"u32"},{"name":"u32"},{"name":"u32"}],"output":{"name":"self"}}],[11,"set_pos","","Set the position of the axes on the figure using screen coordinates.\nThe coordinates refer to the bottom-left corner of the axes\n# Arguments\n* `x` - X position. Ranges from 0 to 1\n* `y` - Y position. Ranges from 0 to 1",18,{"inputs":[{"name":"axescommon"},{"name":"f64"},{"name":"f64"}],"output":{"name":"self"}}],[11,"set_size","","Set the size of the axes\n# Arguments\n* `w` - Width. Ranges from 0 to 1\n* `h` - Height. Ranges from 0 to 1",18,{"inputs":[{"name":"axescommon"},{"name":"f64"},{"name":"f64"}],"output":{"name":"self"}}],[11,"set_aspect_ratio","","Set the aspect ratio of the axes\n# Arguments\n* `ratio` - The aspect ratio. Set to Auto to return the ratio to default",18,{"inputs":[{"name":"axescommon"},{"name":"autooption"}],"output":{"name":"self"}}],[11,"set_x_label","","Set the label for the X axis\n# Arguments\n* `text` - Text of the label. Pass an empty string to hide the label\n* `options` - Array of LabelOption controlling the appearance of the label. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label",18,null],[11,"set_y_label","","Like `set_x_label`, but for the Y axis",18,null],[11,"set_cb_label","","Like `set_x_label`, but for the color bar",18,null],[11,"set_title","","Set the title for the axes\n# Arguments\n* `text` - Text of the title. Pass an empty string to hide the title\n* `options` - Array of LabelOption controlling the appearance of the title. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label",18,null],[11,"label","","Adds a label to the plot, with an optional marker.\n# Arguments\n* `text` - Text of the label\n* `x` - X coordinate of the label\n* `y` - Y coordinate of the label\n* `options` - Array of LabelOption controlling the appearance of the label. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label\n     * `MarkerSymbol` - Specifies the symbol for the marker. Omit to hide the marker\n     * `MarkerSize` - Specifies the size for the marker\n     * `MarkerColor` - Specifies the color for the marker",18,null],[11,"set_x_ticks","","Sets the properties of the ticks on the X axis.",18,null],[11,"set_y_ticks","","Like `set_x_ticks` but for the Y axis.",18,null],[11,"set_cb_ticks","","Like `set_x_ticks` but for the color bar axis.",18,null],[11,"set_x_ticks_custom","","Sets ticks on the X axis with specified labels at specified positions.",18,null],[11,"set_y_ticks_custom","","Like `set_x_ticks_custom` but for the the Y axis.",18,null],[11,"set_cb_ticks_custom","","Like `set_x_ticks_custom` but for the the color bar axis.",18,null],[11,"set_x_range","","Set the range of values for the X axis.",18,{"inputs":[{"name":"axescommon"},{"name":"autooption"},{"name":"autooption"}],"output":{"name":"self"}}],[11,"set_y_range","","Set the range of values for the Y axis.",18,{"inputs":[{"name":"axescommon"},{"name":"autooption"},{"name":"autooption"}],"output":{"name":"self"}}],[11,"set_cb_range","","Set the range of values for the color bar axis.",18,{"inputs":[{"name":"axescommon"},{"name":"autooption"},{"name":"autooption"}],"output":{"name":"self"}}],[11,"set_x_log","","Sets the X axis be logarithmic. Note that the range must be non-negative for this to be valid.",18,{"inputs":[{"name":"axescommon"},{"name":"option"}],"output":{"name":"self"}}],[11,"set_y_log","","Sets the Y axis be logarithmic. Note that the range must be non-negative for this to be valid.",18,{"inputs":[{"name":"axescommon"},{"name":"option"}],"output":{"name":"self"}}],[11,"set_cb_log","","Sets the color bar axis be logarithmic. Note that the range must be non-negative for this to be valid.",18,{"inputs":[{"name":"axescommon"},{"name":"option"}],"output":{"name":"self"}}],[11,"set_palette","","Sets the palette used for 3D surface and image plots",18,{"inputs":[{"name":"axescommon"},{"name":"palettetype"}],"output":{"name":"self"}}],[11,"set_custom_palette","","Sets a custom palette used for 3D surface and image plots. A custom palette\nis specified by a sequence of 4-tuples (with at least one element). The first\nelement is the grayscale value that is mapped to the remaining three elements\nwhich specify the red, green and blue components of the color.\nThe grayscale values must be non-decreasing. All values must range from 0 to 1.",18,{"inputs":[{"name":"axescommon"},{"name":"t"}],"output":{"name":"self"}}]],"paths":[[4,"Coordinate"],[4,"PlotOption"],[4,"FillRegionType"],[4,"AlignType"],[4,"DashType"],[4,"ArrowheadType"],[4,"AutoOption"],[4,"LabelOption"],[4,"TickOption"],[4,"Tick"],[4,"BorderLocation2D"],[4,"LegendOption"],[4,"ContourStyle"],[4,"PaletteType"],[3,"Axes2D"],[3,"Axes3D"],[3,"Figure"],[8,"DataType"],[8,"AxesCommon"]]};
initSearch(searchIndex);
