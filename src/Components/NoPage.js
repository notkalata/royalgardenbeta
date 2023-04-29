import './nopage.css'

export default function NoPage(){
    return(
        <div className="NoPage">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <h1>Uh uh. We've met a roadblock!</h1>
            <h2>It seems the page you are trying to reach doesn't exist.</h2>
            <p>Error 404: Page doesn't exist.</p>
        </div>
    );
}