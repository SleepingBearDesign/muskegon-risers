<!doctype html>  

<!--[if IEMobile 7 ]> <html <?php language_attributes(); ?>class="no-js iem7"> <![endif]-->
<!--[if lt IE 7 ]> <html <?php language_attributes(); ?> class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html <?php language_attributes(); ?> class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html <?php language_attributes(); ?> class="no-js ie8"> <![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)|!(IEMobile)|!(IE)]><!--><html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->
	
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		    <link rel="shortcut icon" href="favicon.png">

		<!-- <title><?php wp_title( '|', true, 'right' ); ?></title>	 -->
		<title> Muskegon Risers Soccer Club </title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
				
		<!-- media-queries.js (fallback) -->
		<!--[if lt IE 9]>
			<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>			
		<![endif]-->

		<!-- html5.js -->
		<!--[if lt IE 9]>
			<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		
  		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<!-- wordpress head functions -->
		<?php wp_head(); ?>
		<!-- end of wordpress head -->
		<link rel="stylesheet" href="library/css/icomoon.css">
	    <link rel="stylesheet" href="library/css/risers.css">
	    <link href="library/css/animate-custom.css" rel="stylesheet">

	    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic' rel='stylesheet' type='text/css'>
	    <link href='http://fonts.googleapis.com/css?family=Raleway:400,300,700' rel='stylesheet' type='text/css'>
				
	</head>
	
	<body <?php body_class(); ?>>
				
		<div id="navbar-main">
		      <!-- Fixed navbar -->
		    <div class="navbar navbar-fixed-top">
		      <div class="container">
		        <div class="navbar-header">
		          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
		            <span class="icon icon-bar"></span>
		        	<span class="icon icon-bar"></span>
		        	<span class="icon icon-bar"></span>
		          </button>
		           <a class="navbar-brand" href="/blog"><span class="risers-risers" style="color:#b9f070;"></span></a>
		        </div>
		        <div class="navbar-collapse collapse">
		          <ul class="nav navbar-nav">
		            <li><a href="http://muskegonrisers.com/" class="smoothScroll">HOME </a></li>
					<li> <a href="http://muskegonrisers.com/#about" class="smoothScroll">ABOUT</a></li>
					<li> <a href="http://muskegonrisers.com/#season" class="smoothScroll">STORE</a></li>
					<li> <a href="http://muskegonrisers.com/#team" class="smoothScroll">TEAM</a></li>
					<li> <a href="http://muskegonrisers.com/#staff" class="smoothScroll">STAFF</a></li>
					<li> <a href="http://muskegonrisers.com/#community" class="smoothScroll">COMMUNITY</a></li>
					<li> <a href="http://muskegonrisers.com/#partners" class="smoothScroll">PARTNERS</a></li>
					<li> <a href="http://muskegonrisers.com/#contact" class="smoothScroll">CONTACT</a></li>
					<li class="active"> <a href="/blog" class="smoothScroll">BLOG</a></li>
					<?php wp_bootstrap_main_nav(); // Adjust using Menus in Wordpress Admin ?>

								<?php //if(of_get_option('search_bar', '1')) {?>
								<form class="navbar-form navbar-right visible-lg" role="search" method="get" id="searchform" action="<?php echo home_url( '/' ); ?>">
									<div class="form-group">
										<input name="s" id="s" type="text" class="search-query form-control" autocomplete="off" placeholder="<?php _e('Search','wpbootstrap'); ?>" data-provide="typeahead" data-items="4" data-source='<?php echo $typeahead_data; ?>'>
									</div>
								</form>
								<?php //} ?>
		        </div><!--/.nav-collapse -->
		      </div>
		    </div>
		</div>
		
		<div class="container">
