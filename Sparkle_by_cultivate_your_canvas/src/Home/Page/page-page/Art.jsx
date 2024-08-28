import React from 'react';
import Lottie from "lottie-react";

import art_animation from '../../../assets/animation/art animation.json'




const Art = () => {



  return (
    <div>
      {
        <div>
          < Lottie animationData={art_animation} loop={true} className='size-[200px]' />
          <h1>Art</h1>
          <p>Art is a powerful form of human expression, a universal language that transcends borders, cultures, and time. Through art, we are able to communicate emotions, ideas, and narratives that words often fail to convey. Whether it is a painting, sculpture, music, dance, or poetry, art reflects the soul of its creator and resonates deeply with its audience.

            Art challenges us to see the world through different lenses, to question what we know, and to explore the depths of human experience. It encourages creativity, pushing boundaries while also preserving tradition. Great works of art have the capacity to inspire, provoke thought, and spark change, influencing society in profound ways.

            Art has always been a mirror of society, reflecting both its beauty and its struggles. It allows us to confront complex realities and find meaning in them. It is a space where imagination reigns, and where every stroke of a brush, note of a song, or word in a poem carries the potential to move hearts and minds.

            In a world that often feels divided, art is a reminder of our shared humanity. It brings people together, reminding us of our capacity for empathy and understanding. It speaks to the dreams, fears, and aspirations that make us who we are.

            Ultimately, art is an eternal source of inspiration and growth. It is a testament to the boundless potential of the human spirit and a reminder that beauty and meaning can always be found, even in the most unexpected places. Let us celebrate art in all its forms, for it enriches our lives, fuels our creativity, and connects us to something greater than ourselves.</p>
        </div>
      }
    </div>
  )
}

export default Art