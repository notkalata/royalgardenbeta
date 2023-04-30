import './footer.css'

export default function Footer({text}){
    return(
        <div className="Footer">
            <p>{text} <i class="fa-brands fa-facebook"></i> 
             <i class="fa-brands fa-linkedin"></i> 
             <i class="fa-brands fa-instagram"></i></p>
        </div>
    );
}