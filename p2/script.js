const title = document.querySelector('.title');
let isStretched = false;
let scaleValue = 1;

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const titlePosition = title.getBoundingClientRect().top;
  const viewportHeight = window.innerHeight;
  const maxStretchHeight = Math.min(viewportHeight * 9, viewportHeight - titlePosition);

  if (!isStretched && titlePosition < viewportHeight && titlePosition > -title.offsetHeight) {
    // Stretch animation
    scaleValue = Math.min(3, 1 + (scrollPosition / (viewportHeight * .25 )));
    title.style.transform = `scaleY(${scaleValue})`;

    // Check if scaleValue has reached the maximum scale
    if (scaleValue >= 3) {
      isStretched = true;
      title.classList.add('stretched');
    }
  } else if (isStretched && titlePosition > viewportHeight) {
    // Reset animation
    isStretched = false;
    scaleValue = 1;
    title.style.transform = `scaleY(1)`;
    title.classList.remove('stretched');
  }
});


const faces =
    [
        {
            'img': 'faces/img1.png',
            'title' : 'face 1',
            'color' : 'blue.',
            'category' : ['pets','currentFriend'].toString()
        },{
            'img': 'faces/img2.png',
            'title' : 'face 2',
            'color' : 'purple.',
            'category' : ['pets','childhoodFriend', 'teenageFriend', 'passed'].toString()
        },{
            'img': 'faces/img3.png',
            'title' : 'face 3',
            'color' : 'red.',
            'category' : ['pets','childhoodFriend', 'teenageFriend', 'passed'].toString()
        },{
            'img': 'faces/img4.png',
            'title' : 'face 4',
            'color' : 'purple.',
            'category' : ['pets','currentFriend'].toString()
        },{
            'img': 'faces/img5.png',
            'title' : 'face 5',
            'color' : 'yellow.',
            'category' : ['pets','currentFriend'].toString()
        },{
            'img': 'faces/img6.png',
            'title' : 'face 6',
            'color' : 'yellow.',
            'category' : ['pets','currentFriend'].toString()
        },{
            'img': 'faces/img7.png',
            'title' : 'face 7',
            'color' : 'green.',
            'category' : ['pets','currentFriend'].toString()
        },{
            'img': 'faces/img8.png',
            'title' : 'face 8',
            'color' : 'orange.',
            'category' : ['pets','childhoodFriend', 'passed'].toString()
        },{
            'img': 'faces/img9.png',
            'title' : 'face 9',
            'color' : 'red.',
            'category' : ['pets','childhodFriend', 'passed'].toString()
        },{
            'img': 'faces/img10.png',
            'title' : 'face 10',
            'color' : 'yellow.',
            'category' : ['pets','childhoodFriend', 'teenageFriend', 'currentFriend'].toString()
        },{
            'img': 'faces/img11.png',
            'title' : 'face 11',
            'color' : 'orange.',
            'category' : ['pets', 'teenageFriend', 'currentFriend'].toString()
        },{
            'img': 'faces/img12.png',
            'title' : 'face 12',
            'color' : 'red.',
            'category' : ['pets','childhoodFriend', 'passed'].toString()
        },{
            'img': 'faces/img13.png',
            'title' : 'face 13',
            'color' : 'yellow.',
            'category' : ['pets','childhoodFriend', 'passed'].toString()
        },{
            'img': 'faces/img14.png',
            'title' : 'face 14',
            'color' : 'orange.',
            'category' : ['philly','teenageFriend', 'artist'].toString()
        },{
            'img': 'faces/img15.png',
            'title' : 'face 15',
            'color' : 'red.',
            'category' : ['philly', 'artist'].toString()
        },{
            'img': 'faces/img16.png',
            'title' : 'face 16',
            'color' : 'green.',
            'category' : ['philly', 'pastPresentBoys', 'Artist'].toString()
        },{
            'img': 'faces/img17.png',
            'title' : 'face 17',
            'color' : 'red.',
            'category' : ['philly', 'artist'].toString()
        },{
            'img': 'faces/img18.png',
            'title' : 'face 18',
            'color' : 'green.',
            'category' : ['philly', 'artist'].toString()
        },{
            'img': 'faces/img19.png',
            'title' : 'face 19',
            'color' : 'blue.',
            'category' : ['philly', 'artist'].toString()
        },{
            'img': 'faces/img20.png',
            'title' : 'face 20',
            'color' : 'yellow.',
            'category' : ['philly', 'artist'].toString()
        },{
            'img': 'faces/img21.png',
            'title' : 'face 21',
            'color' : 'purple.',
            'category' : ['philly','artist' ].toString()
        },{
            'img': 'faces/img22.png',
            'title' : 'face 22',
            'color' : 'red.',
            'category' : ['nyc','artist'].toString()
        },{
            'img': 'faces/img23.png',
            'title' : 'face 23',
            'color' : 'purple.',
            'category' : ['nyc', 'artist'].toString()
        },{
            'img': 'faces/img24.png',
            'title' : 'face 24',
            'color' : 'yellow.',
            'category' : ['nyc'].toString()
        },{
            'img': 'faces/img25.png',
            'title' : 'face 25',
            'color' : 'green.',
            'category' : ['nyc', 'currentFriend', 'artist'].toString()
        },{
            'img': 'faces/img26.png',
            'title': 'face 26',
            'color' : 'purple.',
            'category' : ['nyc', 'artist'].toString()
        },{
            'img': 'faces/img27.png',
            'title' : 'face 27',
            'color' : 'red.',
            'category' : ['nyc', 'currentFriend', 'artist'].toString()
        },{
            'img': 'faces/img28.png',
            'title' : 'face 28',
            'color' : 'blue.',
            'category' : ['nyc', 'currentFriend', 'artist'].toString()
        },{
            'img': 'faces/img29.png',
            'title' : 'face 29',
            'color' : 'orange.',
            'category' : ['nyc', 'pastPresentBoys', 'artist'].toString()
        },{
            'img': 'faces/img30.png',
            'title' : 'face 30',
            'color' : 'blue.',
            'category' : ['nyc', 'artist'].toString()
        },{
            'img': 'faces/img31.png',
            'title' : 'face 31',
            'color' : 'orange.',
            'category' : ['nyc', 'artist'].toString()
        },{
            'img': 'faces/img32.png',
            'title' : 'face 32',
            'color' : 'blue.',
            'category' : ['nyc', 'artist'].toString()
        },{
            'img': 'faces/img33.png',
            'title' : 'face 33',
            'color' : 'orange.',
            'category' : ['nyc', 'currentFriend', 'artist'].toString()
        },{
            'img': 'faces/img34.png',
            'title' : 'face 34',
            'color' : 'yellow.',
            'category' : ['nyc', 'currentFriend', 'artist'].toString()
        },{
            'img': 'faces/img35.png',
            'title' : 'face 35',
            'color' : 'red.',
            'category' : ['family', 'germany'].toString()
        },{
            'img': 'faces/img36.png',
            'title' : 'face 36',
            'color' : 'blue.',
            'category' : ['family', 'germany'].toString()
        },{
            'img': 'faces/img37.png',
            'title' : 'face 37',
            'color' : 'purple.',
            'category' : ['family', 'germany'].toString()
        },{
            'img': 'faces/img38.png',
            'title' : 'face 38',
            'color' : 'purple.',
            'category' : ['family', 'germany'].toString()
        },{
            'img': 'faces/img39.png',
            'title' : 'face 39',
            'color' : 'green.',
            'category' : ['family', 'germany'].toString()
        },{
            'img': 'faces/img40.png',
            'title' : 'face 40',
            'color' : 'orange.',
            'category' : ['family', 'germany'].toString()
        },{
            'img': 'faces/img41.png',
            'title' : 'face 41',
            'color' : 'yellow.',
            'category' : ['family', 'germany'].toString()
        },{
            'img': 'faces/img42.png',
            'title' : 'face 42',
            'color' : 'yellow.',
            'category' : ['family', 'germany'].toString()
        },{
            'img': 'faces/img43.png',
            'title' : 'face 43',
            'color' : 'yellow.',
            'category' : ['family', 'germany'].toString()
        },{
            'img': 'faces/img44.png',
            'title' : 'face 44',
            'color' : 'orange.',
            'category' : ['family', 'germany'].toString()
        },{
            'img': 'faces/img45.png',
            'title' : 'face 45',
            'color' : 'green.',
            'category' : ['family', 'germany' ].toString()
        },{
            'img': 'faces/img46.png',
            'title' : 'face 46',
            'color' : 'orange.',
            'category' : ['family', 'germany'].toString()
        },{
            'img': 'faces/img47.png',
            'title' : 'face 47',
            'color' : 'green.',
            'category' : ['family', 'germany'].toString()
        },{
            'img': 'faces/img48.png',
            'title' : 'face 48',
            'color' : 'orange.',
            'category' : ['connecticut', 'teenageFriend'].toString()
        },{
            'img': 'faces/img49.png',
            'title' : 'face 49',
            'color' : 'green.',
            'category' : ['family', 'germany', 'passed'].toString()
        },{
            'img': 'faces/img50.png',
            'color' : 'orange.',
            'category' : ['family','childhoodFriend', 'connecticut', 'passed'].toString()
        },{
            'img': 'faces/img51.png',
            'title' : 'face 51',
            'color' : 'red.',
            'category' : ['artist', 'passed', 'pastPresentBoys'].toString()
        },{
            'img': 'faces/img52.png',
            'title' : 'face 52',
            'color' : 'red.',
            'category' : ['artist', 'passed', 'pastPresentBoys'].toString()
        },{
            'img': 'faces/img53.png',
            'title' : 'face 53',
            'color' : 'purple.',
            'category' : ['artist', 'passed'].toString()
        },{
            'img': 'faces/img54.png',
            'title' : 'face 54',
            'color' : 'purple.',
            'category' : ['artist', 'pastPresentBoys'].toString()
        },{
            'img': 'faces/img55.png',
            'title' : 'face 55',
            'color' : 'orange.',
            'category' : ['artist'].toString()
        },{
            'img': 'faces/img56.png',
            'title' : 'face 56',
            'color' : 'red.',
            'category' : ['artist'].toString()
        },{
            'img': 'faces/img57.png',
            'title' : 'face 57',
            'color' : 'purple.',
            'category' : ['artist', 'pastPresentBoys'].toString()
        },{
            'img': 'faces/img58.png',
            'title' : 'face 58',
            'color' : 'purple.',
            'category' : ['family', 'germany', 'connecticut', 'artist'].toString()
        },{
            'img': 'faces/img59.png',
            'title' : 'face 59',
            'color' : 'orange.',
            'category' : ['family', 'connecticut'].toString()
        },{
            'img': 'faces/img60.png',
            'title' : 'face 60',
            'color' : 'red.',
            'category' : ['family', 'germany', 'connecticut'].toString()
        },{
            'img': 'faces/img61.png',
            'title' : 'face 61',
            'color' : 'blue.',
            'category' : ['family', 'connecticut'].toString()
        },{
            'img': 'faces/img62.png',
            'title' : 'face 62',
            'color' : 'blue.',
            'category' : ['family', 'germany', 'connecticut'].toString()
        },{
            'img': 'faces/img63.png',
            'title' : 'face 63',
            'color' : 'yellow.',
            'category' : ['family', 'germany'].toString()
        },{
            'img': 'faces/img64.png',
            'title' : 'face 64',
            'color' : 'green.',
            'category' : ['family', 'connecticut', 'nyc'].toString()
        },{
            'img': 'faces/img65.png',
            'title' : 'face 65',
            'color' : 'red.',
            'category' : ['family', 'connecticut'].toString()
        },{
            'img': 'faces/img66.png',
            'title' : 'face 66',
            'color' : 'purple.',
            'category' : ['family'].toString()
        },{
            'img': 'faces/img67.png',
            'title' : 'face 67',
            'color' : 'purple.',
            'category' : ['family', 'germany', 'connecticut'].toString()
        },{
            'img': 'faces/img68.png',
            'title' : 'face 68',
            'color' : 'red.',
            'category' : ['family', 'connecticut'].toString()
        },{
            'img': 'faces/img69.png',
            'title' : 'face 69',
            'color' : 'blue.',
            'category' : ['family', 'connecticut'].toString()
        },{
            'img': 'faces/img70.png',
            'title' : 'face 70',
            'color' : 'red.',
            'category' : ['family', 'connecticut', 'germany'].toString()
        },{
            'img': 'faces/img71.png',
            'title' : 'face 71',
            'color' : 'orange.',
            'category' : ['family', 'connecticut'].toString()
        },{
            'img': 'faces/img72.png',
            'title' : 'face 72',
            'color' : 'orange.',
            'category' : ['family', 'connecticut'].toString()
        },{
            'img': 'faces/img73.png',
            'title' : 'face 73',
            'color' : 'red.',
            'category' : ['family', 'connecticut', 'childhoodFriends'].toString()
        },{
            'img': 'faces/img74.png',
            'title' : 'face 74',
            'color' : 'purple.',
            'category' : ['family', 'connecticut'].toString()
        },{
            'img': 'faces/img75.png',
            'title' : 'face 75',
            'color' : 'yellow.',
            'category' : ['family', 'connecticut', 'childhoodFriend'].toString()
        },{
            'img': 'faces/img76.png',
            'title' : 'face 76',
            'color' : 'yellow.',
            'category' : ['family', 'connecticut'].toString()
        },{
            'img': 'faces/img77.png',
            'title' : 'face 77',
            'color' : 'purple.',
            'category' : ['childhoodFriend', 'teenageFriend', 'didMeDirty', 'connecticut'].toString()
        },{
            'img': 'faces/img78.png',
            'title' : 'face 78',
            'color' : 'blue.',
            'category' : ['childhoodFriend', 'teenageFriend', 'currentFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img79.png',
            'title' : 'face 79',
            'color' : 'red.',
            'category' : ['childhoodFriend', 'teenageFriend', 'currentFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img80.png',
            'title' : 'face 80',
            'color' : 'puruple.',
            'category' : ['childhoodFriend', 'teenagefriend', 'currentFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img81.png',
            'title' : 'face 81',
            'color' : 'yellow.',
            'category' : ['childhoodfriend', 'teenageFriend', 'currentFriend', 'connecticut' ].toString()
        },{
            'img': 'faces/img82.png',
            'title' : 'face 82',
            'color' : 'red.',
            'category' : ['childhoodFriend', 'teenageFriend', 'currentFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img83.png',
            'title' : 'face 83',
            'color' : 'yellow.',
            'category' : ['childhoodFriend', 'teenageFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img84.png',
            'title' : 'face 84',
            'color' : 'red.',
            'category' : ['childhoodFriend', 'teenageFriend', 'connecticut', 'didMeDirty'].toString()
        },{
            'img': 'faces/img85.png',
            'title' : 'face 85',
            'color' : 'red.',
            'category' : ['childhoodFriend', 'connecticut', 'didMeDirty'].toString()
        },{
            'img': 'faces/img86.png',
            'title' : 'face 86',
            'color' : 'blue.',
            'category' : ['childhoodFriend', 'connecticut', 'didMeDirty'].toString()
        },{
            'img': 'faces/img87.png',
            'title' : 'face 87',
            'color' : 'blue.',
            'category' : ['childhoodFriend', 'teenageFriend', 'currentFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img88.png',
            'title' : 'face 88',
            'color' : 'yellow.',
            'category' : ['childhoodFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img89.png',
            'title' : 'face 89',
            'color' : 'blue.',
            'category' : ['childhoodfriend', 'connecticut'].toString()
        },{
            'img': 'faces/img90.png',
            'title' : 'face 90',
            'color' : 'purple.',
            'category' : ['childhoodFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img91.png',
            'title' : 'face 91',
            'color' : 'red.',
            'category' : ['childhoodFriend', 'teenageFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img92.png',
            'title' : 'face 92',
            'color' : 'purple.',
            'category' : ['childhoodFriend', 'teenageFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img93.png',
            'title' : 'face 93',
            'color' : 'green.',
            'category' : ['childhoodFriend', 'teenageFriend', 'currentFriend', 'connecticut', 'artist' ].toString()
        },{
            'img': 'faces/img94.png',
            'title' : 'face 94',
            'color' : 'red.',
            'category' : ['childhoodFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img95.png',
            'title' : 'face 95',
            'color' : 'red.',
            'category' : ['childhoodFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img96.png',
            'title' : 'face 96',
            'color' : 'red.',
            'category' : ['childhoodFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img97.png',
            'title' : 'face 97',
            'color' : 'blue.',
            'category' : ['teenageFriend', 'didMeDirty', 'connecticut'].toString()
        },{
            'img': 'faces/img98.png',
            'title' : 'face 98',
            'color' : 'orange.',
            'category' : ['childhoodFriend', 'teenageFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img99.png',
            'title' : 'face 99',
            'color' : 'purple.',
            'category' : ['childhoodFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img100.png',
            'title' : 'face 100',
            'color' : 'red.',
            'category' : ['teenageFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img101.png',
            'title' : 'face 101',
            'color' : 'red.',
            'category' : ['childhoodFriend', 'teenageFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img102.png',
            'title' : 'face 102',
            'color' : 'blue.',
            'category' : ['teenageFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img103.png',
            'title' : 'face 103',
            'color' : 'red.',
            'category' : ['teenage', 'connecticut'].toString()
        },{
            'img': 'faces/img104.png',
            'title' : 'face 104',
            'color' : 'yellow.',
            'category' : ['teenageFriend', 'connecticut', 'didMeDirty'].toString()
        },{
            'img': 'faces/img105.png',
            'title' : 'face 105',
            'color' : 'red.',
            'category' : ['teenageFreind', 'connecticut'].toString()
        },{
            'img': 'faces/img106.png',
            'title' : 'face 106',
            'color' : 'orange.',
            'category' : ['childhoodfriend', 'teenagefriend', 'connecticut', 'didMeDirty'].toString()
        },{
            'img': 'faces/img107.png',
            'title' : 'face 107',
            'color' : 'red.',
            'category' : ['childhoodFriend', 'teenageFriend', 'currentFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img108.png',
            'title' : 'face 108',
            'color' : 'blue.',
            'category' : ['teenageFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img109.png',
            'title' : 'face 109',
            'color' : 'red.',
            'category' : ['childhoodFriend', 'teenageFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img110.png',
            'title' : 'face 110',
            'color' : 'purple.',
            'category' : ['childhoodFriend', 'teenageFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img111.png',
            'title' : 'face 111',
            'color' : 'red.',
            'category' : ['teenageFriend', 'connecticut', 'didMeDirty'].toString()
        },{
            'img': 'faces/img112.png',
            'title' : 'face 112',
            'color' : 'red.',
            'category' : ['childhoodFriend', 'teenageFriend', 'connecticut', 'didMeDirty'].toString()
        },{
            'img': 'faces/img113.png',
            'title' : 'face 113',
            'color' : 'yellow.',
            'category' : ['teenageFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img114.png',
            'title' : 'face 114',
            'color' : 'yellow.',
            'category' : ['teenageFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img115.png',
            'title' : 'face 115',
            'color' : 'yellow.',
            'category' : ['childhoodFriend', 'teenageFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img116.png',
            'title' : 'face 116',
            'color' : 'orange.',
            'category' : ['childhoodFriend', 'teenageFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img117.png',
            'title' : 'face 117',
            'color' : 'green.',
            'category' : ['childhoodFriend', 'teenageFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img118.png',
            'title' : 'face 118',
            'color' : 'orange.',
            'category' : ['currentFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img119.png',
            'title' : 'face 119',
            'color' : 'green.',
            'category' : ['currentFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img120.png',
            'title' : 'face 120',
            'color' : 'blue.',
            'category' : ['currentFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img121.png',
            'title' : 'face 121',
            'color' : 'red.',
            'category' : ['currentFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img122.png',
            'title' : 'face 122',
            'color' : 'red.',
            'category' : ['childhoodFriend', 'didMeDirty', 'connecticut'].toString()
        },{
            'img': 'faces/img123.png',
            'title' : 'face 123',
            'color' : 'blue.',
            'category' : ['pastPresentBoys', 'didMeDirty', 'childhoodFriend', 'teenageFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img124.png',
            'title' : 'face 124',
            'color' : 'red.',
            'category' : ['childhoodFriend', 'teenageFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img125.png',
            'title' : 'face 125',
            'color' : 'blue.',
            'category' : ['pastPresentBoys', 'connecticut'].toString()
        },{
            'img': 'faces/img126.png',
            'title' : 'face 126',
            'color' : 'blue.',
            'category' : ['pastPresentBoys', 'connecticut', 'didMeDirty'].toString()
        },{
            'img': 'faces/img127.png',
            'title' : 'face 127',
            'color' : 'red.',
            'category' : ['pastPresentBoys', 'connecticut'].toString()
        },{
            'img': 'faces/img128.png',
            'title' : 'face 128',
            'color' : 'red.',
            'category' : ['pastPresentBoys', 'connecticut'].toString()
        },{
            'img': 'faces/img129.png',
            'title' : 'face 129',
            'color' : 'blue.',
            'category' : ['pastPresentBoys', 'childhoodFriend', 'teenageFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img130.png',
            'title' : 'face 130',
            'color' : 'blue.',
            'category' : ['teenageFriend', 'pastPresentBoys', 'connecticut'].toString()
        },{
            'img': 'faces/img131.png',
            'title' : 'face 131',
            'color' : 'purple.',
            'category' : ['teenageFriend', 'pastPresentBoys', 'connecticut', 'didMeDirty'].toString()
        },{
            'img': 'faces/img132.png',
            'title' : 'face 132',
            'color' : 'red.',
            'category' : ['childhoodFriend', 'teenageFriend', 'pastPresentBoys', 'connecticut', 'didMeDirty'].toString()
        },{
            'img': 'faces/img133.png',
            'title' : 'face 133',
            'color' : 'orange.',
            'category' : ['pastPresentBoys', 'childhoodFriend', 'teenageFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img134.png',
            'title' : 'face 134',
            'color' : 'yellow.',
            'category' : ['pastPresentBoys', 'connecticut'].toString()
        },{
            'img': 'faces/img135.png',
            'title' : 'face 135',
            'color' : 'green.',
            'category' : ['pastPresentBoys', 'connecticut', 'childhoodFriend'].toString()
        },{
            'img': 'faces/img136.png',
            'title' : 'face 136',
            'color' : 'green.',
            'category' : ['pastPresentBoys'].toString()
        },{
            'img': 'faces/img137.png',
            'title' : 'face 137',
            'color' : 'red.',
            'category' : ['didMeDirty', 'teenageFriend', 'connecticut'].toString()
        },{
            'img': 'faces/img138.png',
            'title' : 'face 138',
            'color' : 'red.',
            'category' : ['connecticut', 'didMeDirty'].toString()
        },{
            'img': 'faces/img139.png',
            'title' : 'face 139',
            'color' : 'blue.',
            'category' : ['didMeDirty', 'artist'].toString()
        },{
            'img': 'faces/img140.png',
            'title' : 'face 140',
            'color' : 'orange.',
            'category' : ['didMeDirty', 'teenageFriend', 'connecticut', 'pastPresentBoys'].toString()
        },{
            'img': 'faces/img141.png',
            'title' : 'face 141',
            'color' : 'red.',
            'category' : ['childhoodFriend', 'didMeDirty', 'connecticut'].toString()
        },{
            'img': 'faces/img142.png',
            'title' : 'face 142',
            'color' : 'blue.',
            'category' : ['connecticut', 'didMeDirty'].toString()
        },{
            'img': 'faces/img143.png',
            'title' : 'face 143',
            'color' : 'green.',
            'category' : ['artist', 'passed'].toString()
        },{
            'img': 'faces/img144.png',
            'title' : 'face 144',
            'color' : 'orange.',
            'category' : ['artist', 'passed'].toString()
        }
    ];
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    shuffleArray(faces);
    

    document.addEventListener('DOMContentLoaded', function() {
        const toolbox = document.getElementById('toolbox');
        
        // Function to generate HTML markup for each face
        function generateFaceHTML(face) {
            return `
                <div class="face">
                    <img src="${face.img}" alt="${face.title}" />
                </div>
            `;
        }
    
        // Iterate through the faces array and append HTML markup to the toolbox
        faces.forEach(function(face) {
            const faceHTML = generateFaceHTML(face);
            toolbox.innerHTML += faceHTML;
        });

        renderContent();
    });

    

    function createImageElement(face) {
        const faceElement = document.createElement('div');
        faceElement.className = 'grid-item';
    
        const img = document.createElement('img');
        img.src = face.img;
        img.alt = face.title;
    
        faceElement.appendChild(img);
        return faceElement;
    }

    const checkboxes = document.querySelectorAll('.categories input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const selectedCategories = [];
            checkboxes.forEach(function(selectedCheckbox) {
                if (selectedCheckbox.checked) {
                    selectedCategories.push(selectedCheckbox.value);
                }
            });
            console.log('Selected categories:', selectedCategories);
            renderContent(selectedCategories);
        });
    });
    
    let isInitialRender = true;
    
    function renderContent(categories = []) {
        const toolbox = document.getElementById('toolbox');
        toolbox.innerHTML = '';
    
        if (categories.length === 0) {
            for (const face of faces) {
                const faceElement = createImageElement(face);
                toolbox.appendChild(faceElement);
            }
        } else {
            const matchingFaces = faces.filter(face => {
                return categories.every(category => face.category.includes(category));
            });
    
            for (const face of matchingFaces) {
                const faceElement = createImageElement(face);
                toolbox.appendChild(faceElement);
            }
        }
    }
    
    console.log('Faces:', faces);
    renderContent();
