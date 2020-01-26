module.exports =
function(name) {
	return (
 `
 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset=utf-8>
  <title>MoneyBoat Customer Login Beta Invitation</title>
   <style>
	/* Mobile */
  	@media only screen and (min-width : 20px) {
  		body{
	    	/*margin-top: 100px;*/
	    	padding-top: 50px;
			padding-right: 30px;
			padding-bottom: 50px;
			padding-left: 80px;
			color: black;
			font-family: Roboto Regular !important;
	    }
		.logo_container{
			text-align: center;
		}
		.logo{	
			/*height: 300px;	*/
			width: 300px;	
			background: linear-gradient(270deg, #3CCDEF 0%, #1C9EDB 100%);
			border-radius: 50%;
			margin: auto;
		}
		.teaser{
			/*height: 42px;
			width: 318px;*/
			margin-top: 50px;
			color: #3F3356;
			font-family: Roboto Regular;
			font-size: 16px;
			line-height: 40px;
			text-align: left;
		}
		#btn_container{
			margin: auto;
			width: 100% !important;
		}
		#get_started_btn {	
			height: 120px;	
			width: 750px;	
			border-radius: 60px;	
			background: linear-gradient(270deg, #3CCDEF 0%, #1C9EDB 100%);
		}
		#get_started_text{
			height: 75px;	
			width: 240px;	
			color: #FFFFFF;	
			font-family: Roboto;	
			font-size: 48px;	
			font-weight: bold;	
			line-height: 25px;
			text-align: center;
		}
		.footer{
			font-size: 16px;
		}
		.confidentiality_notice{
			font-size: 16px;
			margin: auto;
		}
    }
    /* Desktop */
    @media only screen and (min-width : 1025px) {
    	body{
	    	/*margin-top: 50px;*/
	    	padding-top: 50px;
			padding-right: 30px;
			/*padding-bottom: 50px;*/
			padding-left: 80px;
			font-family: Roboto;
	    }
	    .logo_container{
			text-align: left;
		}
	    .logo{	
			height: 93.98px;	
			width: 93.86px;	
			background: linear-gradient(270deg, #3CCDEF 0%, #1C9EDB 100%);
			border-radius: 50%;
		}
		.teaser{
			text-align: left;
			height: 42px;
			width: 318px;
			color: #3F3356;
			font-family: Roboto;
			font-size: 16px;
			line-height: 21px;
			/*text-align: center;*/
		}
		#btn_container{
			padding-bottom: 60px;
			margin: auto;
		}
		

    }
    
  </style>
</head>
<body>
	<div class="logo_container">
		<img class="logo" src="https://www.moneyboat.co.uk/wp-content/uploads/2020/01/email_logo.png"/>
		
	</div>

	<p class="teaser">
		Dear Brad,
		<br/>
		<br/>
		Congrats! You've been included in a select group of customers to try out the new Moneyboat Customer Login Area for its initial release!
	</p>
	<br/>
	<p class="teaser">
		The MoneyBoat Customer Login allows you to:
		<ul>
			<li>Update Your Payment Information</li>
			<li>Pay off Your Loan</li>
			<li>View Your Details</li>
			<li>Edit Your Personal Information</li>
			<li>View Past Transactions</li>
			<li>And More…</li>
		</ul>
	</p>
	<br/>
	<br/>

	<a id="btn_container"
		style="padding-bottom: 100px;"
		href="https://my.moneyboat.co.uk/register">
		<button style="height: 40px;	
			width: 318px;	
			border-radius: 20px;	
			background: linear-gradient(270deg, #3CCDEF 0%, #1C9EDB 100%);"
			id="get_started_btn"
			type="button">
			<center>
				<p style="color: #FFFFFF;	
				font-family: Roboto;	
				font-size: 16px;	
				font-weight: bold;	
				line-height: 6px;" id="get_started_text">Get Started</p>
			</center>
		</button>
	</a>

 <br />
 	<div class="footer">
   <span><b>p:</b> 34 The Mall | High Street | Bromley | BR1 1TS</span>
    <br />
   <span><b>t: </b>0203 818 7470 </span>
    <br />
   <span><b>m:</b> 07533 023 333</span>
    <br />
   <span><b>e:</b> <a href="mailto:thecrew@moneyboat.co.uk" target="_blank">thecrew@moneyboat.co.uk</a></span>
    <br />
    <br />

    <br />
    <a href="https://www.moneyboat.co.uk/blog" rel="noopener" target="_blank">
        <img alt="Banner" src="https://www.moneyboat.co.uk/wp-content/uploads/2019/06/Copy-of-email-banner.png">
    </a>
    <br />
    <br />
    <div>
         <span class="confidentiality_notice">
                    Confidentiality Notice: This message is intended solely for the addressee and may contain confidential information.
                    If you have received this message in error, please send it back to us, and immediately and permanently delete it.
                    Do not use, copy or disclose the information contained in this message or in any attachment.
                    For information about how we process data and monitor communications please see our Privacy Policy and our Terms of Website Use Policy.
                    Evergreen Finance London Limited is a limited company registered in England and Wales with registered number 07669210. Our registered office is at 5 Broadbent Close,
                    Highgate, London, N6 5JW We are authorised and regulated by The Financial Conduct Authority, License Number 674154.
    </span>

</body>
</html>
`
)};