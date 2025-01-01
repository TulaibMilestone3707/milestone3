 const from = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement
const shareableLinkContainer=document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton =document.getElementById('download-pdf') as HTMLButtonElement;
from.addEventListener('submit' ,(event:Event) =>{
    event.preventDefault();

    const username = (document.getElementById('username ') as  HTMLInputElement).value
    const name = (document.getElementById('name ') as  HTMLInputElement).value
    const email = (document.getElementById('email ') as  HTMLInputElement).value
    const phone = (document.getElementById('phone  ') as  HTMLInputElement).value
    const education = (document.getElementById('education') as  HTMLInputElement).value
    const experience = (document.getElementById('experience  ') as  HTMLInputElement).value
    const skills = (document.getElementById('skills ') as  HTMLInputElement).value


const resumeData = {
     name,
     email,
     phone,
     education,
     experience,
     skills,
};
localStorage.setItem( username, JSON.stringify(resumeData));

const resumeHTML=`<h2><b> Editable Resume </b></h2>
<h3>Persnal Information</h3>
<p><b>Name</b> <span contenteditable="true">${name}</span></p>
<p><b>Email</b><span contenteditable="true">${email}</span></p>
<p><b>phone</b><span contenteditable="true">${phone}</span></p>}

<h3>education</h3>
<p contenteditable="true">${education}</p>

<h3>experience</h3>
<p contenteditable="true">${experience}</p>


<h3>skills</h3>
<p contenteditable="true">${skills}</p>
`;
 
resumeDisplayElement.innerHTML= resumeHTML;
const shareableURL =` ${window.location.origin}?username=${encodeURIComponent(username)}`;

shareableLinkContainer.style.display ='block';
shareableLinkElement.href=shareableURL;
shareableLinkElement.textContent = shareableURL;

});
downloadPdfButton.addEventListener('click', ()=>{
    window.print();
})

window.addEventListener('DOMContentLoaded',()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

if (username){
    const savedResumeData=localStorage.getItem(username);
}

if (savedResumeData){
    const resumeData = JSON.parse(savedResumeData);
(document.getElementById('name') as HTMLInputElement).value= resumeData.name;
(document.getElementById('username') as HTMLInputElement).value=resumeData.email;
(document.getElementById('username') as HTMLInputElement).value=resumeData.phone;
(document.getElementById('username') as HTMLInputElement).value=resumeData.education;
(document.getElementById('username') as HTMLInputElement).value=resumeData.experience;
(document.getElementById('username') as HTMLInputElement).value=resumeData.skills;
}
}


);






