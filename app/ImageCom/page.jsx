import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <div className='p-10 bg-black/30'>
    <ImageList
      sx={{
          width: '100%', // Set width to 100% for responsiveness
          height: 'auto', // Set height to auto for responsiveness
        }}
        variant="quilted"
        cols={4}
        rowHeight="auto" // Set rowHeight to auto for responsiveness
        >
      {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            />
        </ImageListItem>
      ))}
    </ImageList>
      </div>
  );
}

// Your itemData array remains unchanged


const itemData = [
  {
    img: 'https://blogger.googleusercontent.com/img/a/AVvXsEgTZ_n3KrHtu2dXsNR5COZvAQP1TLiR9gFSFKg2NIyIgJI951vqwzAXhfzfdHOxIg8KvTESRVGOnNzz5IaFOT7v-EaMpGO-p7EW0uM_l73wkHxjEFa5DNl4DhpFtw4BaUeUeABUrRW2N1E0I9QkBcrx7qG66a5thf1ZsAEWEJNP1ggf9sIeeZwAYpkmZ39i',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://blogger.googleusercontent.com/img/a/AVvXsEjWc8TgLccIv6q8tQUDmYBAqJfzUXXy4vA1GmwvF9GZ6qt1z7OL-XqQVgRHlTewdTCW-xhW1EDFotc5zGc1zMqqe_XJjQuDCnc_uEBX9WqcQfmiUhijQMCYTlDoVVPXm_SR8SwTGVTc1550KHcM6Vq7_E_O3xA2eE7mMvJr3JEDDokTmyhWXbFxpVxN7uEH',
    title: 'Burger',
  },
  {
    img: 'https://blogger.googleusercontent.com/img/a/AVvXsEjut3xKqcNp_G5JYeleBtQFxoUaaIvXkQpGoWSHXWTR-0yxKq9LKyIYM6IAf9AYaPVXTxYh6FirZ-AIoQ-q5KNsgGFH2g3s8spzEIJFyyjkGkx5my4Tlpod6Ap6_yL96ERr3aXP_vRakXVgDAACN8UxC_FQ-t3kNJI1amHkaNJwwtWq7KV60AKwFgSFf8Nc',
    title: 'Camera',
  },
  {
    img: 'https://blogger.googleusercontent.com/img/a/AVvXsEgT3yKR4xsLvRAh-YGYROBKXjwyi0liwPrd-CSURiRlBjZFyNkYPAVvqUjEdMQS5y9otiRsDNA2BFAddThrYRbNG_4AkLUonrAwv_on-bhFtLYqc3YOU_BP3bzQp_dA5b3LQ8CvsfInyCETTVQwrvhj912hZTwOpHzI3OYjzGgpngBPYWJ12DVhdd19VEV4',
    title: 'Coffee',
    cols: 2,
  },
 
  
  
];