import lexueVideo from "../images/Lexus.mp4"
import "./videos.css"

let redirect_Page = () => {
  let tID = setTimeout(function () {
      window.location.href = "/FormSub";
      window.clearTimeout(tID);		// clear time out.
  }, 1000);
}


export default function Student () {
  return (
    <div >
        <video autoPlay muted loop className="myVideo" >
            <source src={lexueVideo} type="video/mp4" />
        </video>
        <div class="content">
            <button class = "myBtn" onClick={redirect_Page}>Click to Redirect in 1 seconds</button>
        </div>
    </div>
  )
}