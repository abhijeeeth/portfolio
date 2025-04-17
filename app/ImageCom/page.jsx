import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Determine columns based on screen size
  const getGridCols = () => {
    if (isMobile) return 2;
    if (isTablet) return 3;
    return 4;
  };

  return (
    <Box sx={{
      padding: { xs: 2, sm: 4, md: 6 },
      background: 'linear-gradient(to top, #111827, #000000)', // Changed from solid white to gradient
      borderRadius: 2,
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
    }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          mb: 4,
          fontWeight: 600,
          textAlign: 'center',
          color: '#fff' // Changed text color to white for better contrast
        }}
      >
        Me And My Interests
      </Typography>

      <ImageList
        sx={{
          width: '100%',
          height: 'auto',
          gap: 105,
          overflow: 'hidden',
        }}
        variant="quilted"
        cols={getGridCols()}
        rowHeight="auto"
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            sx={{
              overflow: 'hidden',
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease-in-out',
              margin: '8px', // Added margin around each image
              '&:hover': {
                transform: 'scale(1.02)',
                '& .MuiImageListItemBar-root': {
                  opacity: 1,
                }
              }
            }}
          >
            <img
              {...srcset(item.img, 200, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s'
              }}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.description}
              sx={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                opacity: 0.9,
                transition: 'opacity 0.3s',
                '& .MuiImageListItemBar-title': {
                  fontSize: '1.1rem',
                  fontWeight: 500,
                },
                '& .MuiImageListItemBar-subtitle': {
                  fontSize: '0.9rem',
                }
              }}
              position="bottom"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://blogger.googleusercontent.com/img/a/AVvXsEgTZ_n3KrHtu2dXsNR5COZvAQP1TLiR9gFSFKg2NIyIgJI951vqwzAXhfzfdHOxIg8KvTESRVGOnNzz5IaFOT7v-EaMpGO-p7EW0uM_l73wkHxjEFa5DNl4DhpFtw4BaUeUeABUrRW2N1E0I9QkBcrx7qG66a5thf1ZsAEWEJNP1ggf9sIeeZwAYpkmZ39i',
    title: 'Flutter Dev And Data Science Student',
    description: 'Working as a Flutter developer for 2 years with expertise in mobile app development. Currently a first-year Data Science postgraduate student expanding into analytics and machine learning.',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://blogger.googleusercontent.com/img/a/AVvXsEjWc8TgLccIv6q8tQUDmYBAqJfzUXXy4vA1GmwvF9GZ6qt1z7OL-XqQVgRHlTewdTCW-xhW1EDFotc5zGc1zMqqe_XJjQuDCnc_uEBX9WqcQfmiUhijQMCYTlDoVVPXm_SR8SwTGVTc1550KHcM6Vq7_E_O3xA2eE7mMvJr3JEDDokTmyhWXbFxpVxN7uEH',
    title: 'Photographer',
    description: 'National level prize winner',
  },
  {
    img: 'https://blogger.googleusercontent.com/img/a/AVvXsEjut3xKqcNp_G5JYeleBtQFxoUaaIvXkQpGoWSHXWTR-0yxKq9LKyIYM6IAf9AYaPVXTxYh6FirZ-AIoQ-q5KNsgGFH2g3s8spzEIJFyyjkGkx5my4Tlpod6Ap6_yL96ERr3aXP_vRakXVgDAACN8UxC_FQ-t3kNJI1amHkaNJwwtWq7KV60AKwFgSFf8Nc',
    title: 'Dog Person',
    description: 'My favorite dog Iza, loyal companion and best friend',
  },
  {
    img: 'https://blogger.googleusercontent.com/img/a/AVvXsEgT3yKR4xsLvRAh-YGYROBKXjwyi0liwPrd-CSURiRlBjZFyNkYPAVvqUjEdMQS5y9otiRsDNA2BFAddThrYRbNG_4AkLUonrAwv_on-bhFtLYqc3YOU_BP3bzQp_dA5b3LQ8CvsfInyCETTVQwrvhj912hZTwOpHzI3OYjzGgpngBPYWJ12DVhdd19VEV4',
    title: 'Travel Enthusiast',
    description: 'Exploring new cultures, landscapes, and experiences across the globe. Always seeking the next adventure.',
    cols: 2,
  },
];