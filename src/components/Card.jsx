import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ cardData }) => {
  const cardContainerRef = useRef(null); // Create a reference for the card container
  const navigate = useNavigate(); // Use navigate to programmatically navigate to recipe page

  const moveSlider = (direction) => {
    const container = cardContainerRef.current;
    const scrollAmount = 300; // Amount to scroll on each click (adjust as needed)
    
    if (direction === 'right') {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' }); // Move right
    } else if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' }); // Move left
    }
  };

  // Inline CSS styles (same as before)
  const fullImageStyle = {
    position: 'relative',
    width: '100%',
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '20px',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const textContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    color: 'white',
    fontSize: '1.2rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    padding: '10px',
    width: '80%',
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '1rem',
    marginBottom: '15px',
  };

  const buttonStyle = {
    backgroundColor: '#FFA500',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '1rem',
  };

  const sectionHeadingStyle = {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',  // Enables scrolling without showing scrollbars
    paddingBottom: '20px',
    paddingLeft: '20px',
    scrollBehavior: 'smooth',  // Smooth scrolling effect
    scrollbarWidth: 'none',  // For Firefox to hide scrollbar
    msOverflowStyle: 'none',  // For IE/Edge to hide scrollbar
  };

  const cardStyle = {
    flex: '0 0 auto',
    width: '22%',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxSizing: 'border-box',
    textAlign: 'center',
  };

  const sliderButtonStyle = {
    position: 'absolute',
    top: '50%',
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
  };

  const leftButtonStyle = {
    ...sliderButtonStyle,
    left: '10px',
  };

  const rightButtonStyle = {
    ...sliderButtonStyle,
    right: '10px',
  };

  // Function to handle navigating to the recipe page with recipe data
  const handleGetRecipe = (recipe) => {
    navigate(`/recipe/${recipe.id}`, { state: { recipe } }); // Pass the recipe data to the Recipe page
  };

  return (
    <div>
      <div>
        {/* Manually defined full image and description */}
        <div style={fullImageStyle}>
          <img 
            src="/image/burger-icon-cartoon-hamburger-fast-food-symbol_80590-14811.jpg" 
            alt="Manual Image" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={textContainerStyle}>
            <h2 style={headingStyle}>Manual Heading</h2>
            <p style={descriptionStyle}>This is a manually added description for the full image.</p>
            {/* Added handler to navigate to recipe page for manual section */}
            <button 
              style={buttonStyle} 
              onClick={() => handleGetRecipe({
                id: 0,
                heading: 'Manual Recipe',
                image: '/image/burger-icon-cartoon-hamburger-fast-food-symbol_80590-14811.jpg',
                description: 'Manual description',
                duration: '15 mins',
                rating: '5'
              })}
            >
              Get Recipe
            </button>
          </div>
        </div>
        <h2 style={sectionHeadingStyle}>Popular Recipes</h2>

        <div style={{ position: 'relative' }}>
          {/* Left Navigation Button */}
          <button
            style={leftButtonStyle}
            onClick={() => moveSlider('left')}
            aria-label="Scroll Left"  // Added accessibility label
          >
            <i className="fas fa-chevron-left"></i> {/* FontAwesome Left Icon */}
          </button>

          {/* Card Container */}
          <div ref={cardContainerRef} style={cardContainerStyle}>
            {cardData.map((item, index) => (
              <div key={index} style={cardStyle}>
                <div style={fullImageStyle}>
                  <img src={item.image} alt={item.heading} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={textContainerStyle}>
                    <h2 style={headingStyle}>{item.heading}</h2>
                    <p style={descriptionStyle}>{item.duration}</p>
                    <p style={descriptionStyle}>{item.description}</p>
                    <p style={descriptionStyle}>Rating: {item.rating}</p>
                    <button style={buttonStyle} onClick={() => handleGetRecipe(item)}>
                      Get Recipe
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation Button */}
          <button
            style={rightButtonStyle}
            onClick={() => moveSlider('right')}
            aria-label="Scroll Right"  // Added accessibility label
          >
            <i className="fas fa-chevron-right"></i> {/* FontAwesome Right Icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
