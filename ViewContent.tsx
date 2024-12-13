import React, {useState, useCallback, useEffect } from 'react';
const titleElement = document.getElementById(MAILCHIMP_TEMPLATE.title);


const ViewContent = () => {
  const [title, setTitle] = useState('');
  const updateDisplay = useCallback((value, element) => {
    if (element) {
      element.innerHTML = value; // eslint-disable-line no-param-reassign
    }
  }, []);
  useEffect(() => updateDisplay(title, titleElement), [title, titleElement, updateDisplay]);
  return (
      <div>
        <Grid item xs={8}>
          <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={({ target: { value } }) => setTitle(value)}
              data-testid="title"
          />
        </Grid>
      </div>
  );
}

