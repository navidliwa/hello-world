const editPostFormHandler = async (e) => {
    e.preventDefault();
    console.log("Editing post...");

    const title = document.querySelector('#title-edit-post').value.trim();
    const body = document.querySelector('#body-edit-post').value.trim();
    const postId = document.querySelector('#postId').value.trim();

    if (title && body && postId) {
        
    }
}

const deletePost = async () => {
    console.log('Deleting');
    const postId = document.querySelector('#postId').value.trim();
    console.log(postId);
    
    if (postId) {
        const response = await fetch('/api/posts/' + postId, {
            method: 'DELETE',
            body: JSON.stringify({postId}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('#edit-form')
    .addEventListener('submit', editPostFormHandler);

document
    .querySelector('#delete-btn')
    .addEventListener('click', deletePost);