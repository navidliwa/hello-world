const editPostFormHandler = async (e) => {
    e.preventDefault();
    console.log("Posting...");

    const title = document.querySelector('#title-post').value.trim();
    const body = document.querySelector('#body-post').value.trim();

    if (title && body) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            window.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('#edit-post-form')
    .addEventListener('submit', editPostFormHandler);