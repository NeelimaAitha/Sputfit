import {useRef, useEffect} from 'react'
import {gsap} from 'gsap'

import WorkingWithUsRightCardItem from '../WorkingWithUsRightCardItem'

import './index.css'

const workWithUsLeftCardDetails = [
  {
    id: 1,
    title: 'Power through, even when the going gets tough',
    description:
      'We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.',
  },
  {
    id: 2,
    title: 'Power through, even when the going gets tough',
    description:
      'We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.',
  },
  {
    id: 3,
    title: 'Power through, even when the going gets tough',
    description:
      'We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.',
  },
  {
    id: 4,
    title: 'Power through, even when the going gets tough',
    description:
      'We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.',
  },
]

const WorkWithUs = () => {
  const workWithTitleRef = useRef(null)
  const workWithSideTitleRef = useRef(null)
 const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    const moveImage = () => {
      image.style.transform = 'translateX(200px)'; // Move image 200px to the right
    };

    setTimeout(moveImage, 1000); // Trigger moveImage function after 1 second
  }, []);

  return <img ref={imageRef} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUHHhmODkp6LXZiHf1FRJNpV3ukrlxjHgNMQTNQ46WNCTL5RV0ACYYWt_HrbfX08YLms&usqp=CAU'} alt="Animated" className="animated-image" />;
};
  return (
    <div className="work-with-us-container">
      <header className="work-with-us-header">
        <h1 className="work-with-us-title" ref={workWithTitleRef}>
          Work with us
        </h1>
        <h3 className="work-with-us-side-title" ref={workWithSideTitleRef}>
          ahead
        </h3>
      </header>
      <div className="work-with-us-cards">
        <div className="work-with-us-left-card">
          <div className="about-card">
            <p className="about-product-text">About</p>
            <p className="product-about-description">
              At ahead our goal is to make self improvement fun and lasting. We
              know there's a way how to make it work. And that's what aHead is
              all about!
            </p>
          </div>
          <div className="product-card">
            <p className="about-product-text">Product</p>
            <p className="product-about-description">
              At ahead our goal is to make self improvement fun and lasting. We
              know there's a way how to make it work. And that's what aHead is
              all about!
            </p>
          </div>
        </div>
        <ul className="work-with-us-right-card">
          {workWithUsLeftCardDetails.map(leftCardItem => (
            <WorkingWithUsRightCardItem
              key={leftCardItem.id}
              cardDetails={leftCardItem}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WorkWithUs
