document.addEventListener('DOMContentLoaded', () => {
    const form    = document.getElementById('contact-form');
    if (!form) return;

    const success = document.getElementById('form-success');
    const fields  = [
        document.getElementById('nom'),
        document.getElementById('organisation'),
        document.getElementById('sujet')
    ];

    // Remove error state on input
    fields.forEach(field => {
        field.addEventListener('input', () => field.classList.remove('error'));
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let valid = true;

        fields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('error');
                valid = false;
            } else {
                field.classList.remove('error');
            }
        });

        if (!valid) return;

        // Show success message
        success.classList.remove('hidden');
        form.reset();

        // Hide success after 8 seconds
        setTimeout(() => success.classList.add('hidden'), 8000);
    });
});
