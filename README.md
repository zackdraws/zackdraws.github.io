    ## Hello, read this file for a description on how this website works ## 
		
		## 1. Download the Folder of the code - replace all of my files with your own files 
		Place the folder into a place that's easy to find 
		use VsCode or Emacs or some other Code editor to view a live preview of the website

# Directory of Files	
- Index.html is the main homepage and holds the info for the website
- styles.css is for the styling of the website
- Lightbox.js is the javascript that controls the lightbox effect
- cd01.jpg (Files for character design) , bg01.jpg (Files for Background), fg01.jpg (Files for Sketchbook) 
    
* Hosting: You'll need to use a server for hosting you can use
Github Pages or whatever you prefer that can host folders of html and CSS + JS

	- This Website comes with a SideHeader and a Body For Portfolio Work

# Body Section of Website 

## - First Header  "Animation Reel"
ANP.mp4 is the name of the Animation Reel and is put at the top of the website
## - Second Header "Character Design"
Place all of your character designs in your folder and name them 
cd01.jpg, cd02.jpg, cd03.jpg and so on- that's what my files are named and that they go in as
## - Third Header "Backgrounds"
Place all of your Background in your folder and name them 
bg01.jpg bg02.jpg bg03.jpg and so on
## - Fourth HeaderStory Samples
Place all of your Storyboard Samples in your folder and name them 
## - Fifth Header Sketchbook Work
Place all of your in your folder and name them 
		
# Side Header --

##  Website Pages
### - Portfolio
   - CharacterDesign
   CharacterDesign.html
   - Story
   Story.html
   - Animation
   Animation.html
### About Me
	- About
* For your aboutme file the file should be About.jpg
### Contact 
 - 
### Social Links 
 - Instagram
 - Twitter
 - Linkedin
 

### Index.html 
#### Header
this part controls your header and links
<!DOCTYPE html>
<html lang="en">
    <head>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Your+Selected+Font" />
</head>
    <body>
       <header class="website-header">
         <nav class="header-navigation">
	    <div class="profile">
            <h><a href="index.html"><h1>Zack Johnson </h1> </a></h1> 
            <h3>Story - Animation - Design</h3>
            <h3>ZackJohnsonArt@gmail.com - (949) 228-9271 </h3>
        </div>
        <ul>
            <li><a href="index.html"><h3>Portfolio</h3>
	      <ul class="submenu">
                    <li><a href="CharacterDesign.html">Character Design</a></li>
                    <li><a href="Story.html">Story</a></li>
                    <li><a href="Animation.html">Animation</a></li>
                </ul>
            </li>
            <li><a href="Resume.html"> <h3>About Me</h3></a></li>
            <li><a href="mailto:zackjohnsonart@gmail.com"> <h3> Contact</h3></a></li>
            <div class="social-links">
                <a class="social-link" href="https://www.instagram.com/zackdraws">
                    <img src="insta.png" alt="Instagram">
                </a>
                <a class="social-link" href="https://twitter.com/zack_draws">
                    <img src="twitter.png" alt="twitter">
                </a>
                <a class="social-link" href="https://linkedin.com/in/zackisdrawing">
                    <img src="linkedin.png" alt="linkedin">
                </a>	
            </div>
			
			
			### Contect Sections
#### Animation Reel -
This Part is where your animation reel goes just make sure that your animation reel title fits the src for mine I just name my file ANP.mp4
#### Character Design -
All character design pages are labeled as cd01.jpg cd02.jp cd03.jpg and so on

format is  </div>
                <div class="gallery-item">
                    <img src="cd02.jpg" alt="Character Design 2" data-src="cd02.jpg">
                </div>

#### Story Samples -
Story Samples put your samples in there 
#### Sketchbook -
