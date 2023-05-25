const { post } = require("../../controllers");

const commmentFormHandler = async (e) => {
    e.preventDefault();
    console.log("Adding comment...");

    const commentBody = document.querySelector('#body-comment').value.trim();
    const postId = document.querySelector('#postId').value.trim();
    
    if (commentBody && postId) {
        console.log("postId", postId);
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({commentBody, postId}),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            window.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('#comment-form')
    .addEventListener('submit', commmentFormHandler);