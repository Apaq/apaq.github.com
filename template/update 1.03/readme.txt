1- For HTML files:

# add this line to head
<script type="text/javascript" src="js/mediaelement-and-player.js"></script>

# Replace video section code - (line 769)
		    <!-- Start Video -->
                    <video class="section-video" poster="images/video/poster.jpg" autoplay loop preload="none">
                        <!-- MP4 source must come first for iOS -->
                        <source type="video/mp4" src="images/video/video.mp4" />
                        <!-- WebM for Firefox 4 and Opera -->
                        <source type="video/webm" src="images/video/video.webm" />
                        <!-- OGG for Firefox 3 -->
                        <source type="video/ogg" src="images/video/video.ogv" />
                        <!-- Fallback flash player for no-HTML5 browsers with JavaScript turned off -->
                        <object type="application/x-shockwave-flash" data="images/video/flashmediaelement.swf"> 		
                            <param name="movie" value="images/video/flashmediaelement.swf" /> 
                            <param name="flashvars" value="controls=false&amp;file=images/video/flashmediaelement.mp4" /> 		
                            <!-- Image fall back for non-HTML5 browser with JavaScript turned off and no Flash player installed -->
                            <img src="images/video/poster.jpg" alt="No Video Image" title="No video playback capabilities" />
                        </object> 	
                    </video>
                    <script>$('.section-video').mediaelementplayer({ loop:true });</script>
                    <!-- End Video -->

----------------------------------------------------------------------------------------------------------------------------------

2- Upload images, css and js files.
