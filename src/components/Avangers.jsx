import { useState, useRef} from "react";

function App() {
  const [active, setActive] = useState(null);
  const containerRef = useRef(null);
  const cardRefs = useRef({});

  const handleClick = (id) => {
    setActive(active === id ? null : id);

    const card = cardRefs.current[id];
    const box = containerRef.current;
    
    if (card && box) {
      const cardRect = card.getBoundingClientRect();
      const boxRect = box.getBoundingClientRect();
    
      // card ka actual left position viewport ke hisab se
      const leftPos = cardRect.left - boxRect.left + box.scrollLeft;
    
      // card ko left par laane ke liye
      const target = leftPos - 0; // thoda gap
    
      // scroll limit
      const maxScroll = box.scrollWidth - box.clientWidth;
    
      box.scrollTo({
        left: Math.min(Math.max(target, 0), maxScroll),
        behavior: "smooth",
      });
    }
  };

  const cards = [
    { id: 1, name:"Tony Stark", title: "Iron Man", naam:"iranman",
      description:"Tony Stark is a billionaire industrialist and the main antagonist of the Avengers. He is the owner of Stark Industries, a company that produces armored suits for the Avengers.",

      img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1653410.jpg&f=1&nofb=1&ipt=684f4ec4d0a97e86c784a51bd9e198914073b37a1f337b03caa95ae888162e85",

      img2:"https://i.pinimg.com/1200x/94/c5/15/94c515bc9bb193b4b685423e82145eae.jpg",

      img3:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.NOoW_K9nzPvSNRWTcMNNKgHaEK%3Fpid%3DApi&f=1&ipt=e9f06f79991ca6bba96982045b3282f857e58d992ee1b8c6233a40e7fe450642&ipo=images",

      img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F2%2FIron-Man-PNG-Download-Image.png&f=1&nofb=1&ipt=6ce934329da9ee04140f3367d279f51955c908c286efab6d7548c222292cecfd"
      
    },

    { id: 2, name:"Steve Rogers", title: "CaptainAmerica",    naam:"captainamerica", 
      description:"Steve Rogers is a former soldier who becomes a superhero by transforming into Captain America. He is a member of the Avengers and is the leader of the team.",

      img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.XqB3ffvCF7C40-PRsf-zOAHaEK%3Fpid%3DApi&f=1&ipt=86af4deb677ff86a238e9e595c457271917fc52fc2ff22bb8a98b79b8bf79555&ipo=images",

      img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.KDV7SyBEclo8oV6o47SfCwHaFd%3Fpid%3DApi&f=1&ipt=f2381159032163cd5fc7143976420fbeefdc09da2f5424bae7429ca50d49a019&ipo=images",

      img3:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.i366f0Wa3FuMSvfABpmSRAHaEK%3Fpid%3DApi&f=1&ipt=581196e168939ddd56a9754459f641afee91b62ae909e86931c26b2e95d6dab9&ipo=images",

      img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fcaptain_america%2Fcaptain_america_PNG14.png&f=1&nofb=1&ipt=ad58931b81a75c39e6c8b208c32a0e77647b8b8a53e46079c0b6f0c75ba8a333"
    },

    { id: 3, name:"Thor Odinson", title: "Thor", naam:"thor",
      description:"Thor is a god of thunder and the son of Odin. He is a member of the Avengers and is the leader of the team. He is a god of thunder and the son of Odin.",

      img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.hdqwalls.com%2Fwallpapers%2Fthor-in-thor-rangnarok-movie-1g.jpg&f=1&nofb=1&ipt=3a3afe4bd26fc87ce1c2bcc5b11bb6c4449820ef14b432cf66616bae403c38fc",
      img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4581861.jpg&f=1&nofb=1&ipt=55002d8f4475bb205efd771a179e10f4bfdae5a09b83b5ec7b06cbf84c66df7d",
      img3:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%2Fid%2FOIP.X4kOCGmS_GvB7HDPEZwcSwHaEe%3Fpid%3DApi&f=1&ipt=c8a3ff3c55c0e461b7260c131b7da0a82f2c48fc60bee92cf4ffc77ead608119&ipo=images",
      img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngplay.com%2Fwp-content%2Fuploads%2F8%2FThor-Transparent-Free-PNG.png&f=1nofb=1&ipt=ef5d120a7b1de49771751652a96302f5c749f423d21f577e8a6b6404b62f37f1"

    },

    { id: 4, name:"Bruce Banner", title: "Hulk", naam:"hulk",
      description:"Hulk is a superhero that is a member of the Avengers. He is a member of the Avengers and is the leader of the team. He is a member of the Avengers and is the leader of the team.",
      
      img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.So3XAr096_DKAoO8-sC47wHaEK%3Fpid%3DApi&f=1&ipt=a44b49519136c6253dce0794b47832c88ac868381ef2ac407744f2f58358ca29&ipo=images",
      img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.KR7pEz-zR1we96E6KSlO8gHaEK%3Fpid%3DApi&f=1&ipt=d1b07499052522e3c84063c1857b0953b1e737fa83c6589c7a1a40458166a117&ipo=images",
      img3:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.VsaG_CSrPiawzMwZ7e8W9QHaEK%3Fpid%3DApi&f=1&ipt=469c2ab0b795305ea4b8df88ee67e99d449dac1540873a9cc426568759c55330&ipo=images",
      
      img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F2%2FHulk-PNG-Photo.png&f=1&nofb=1&ipt=5796ccd1520956115abae981e37afcf01d1559231e5b9989069b78316f1867a0"
    },

    { id: 5, name:"Stephen Strange", title: "Doctor Strange",   naam:"docterstrange", 
      description:"Doctor Strange is a superhero that is a member of the Avengers. He is a member of the Avengers and is the leader of the team. He is a member of the Avengers and is the leader of the team.",

      img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fscreenrant.com%2Fwp-content%2Fuploads%2F2016%2F11%2FRachel-McAdams-Doctor-Strange-Christine-Palmer.jpg&f=1&nofb=1&ipt=f35a0a14fe26461afba396bc37b0468c8fad2d8fd64965b42b1063d578b75a2b",
      img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.3hVOABQ77TGsaUF0Fxrk8wHaEK%3Fpid%3DApi&f=1&ipt=6cdca7a053d4b44dfceb7060d3106e27c48e747f7a9753d016b974f96a7d3694&ipo=images",
      img3:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.uJGhdnpueyPwm3XwidcBugHaEK%3Fpid%3DApi&f=1&ipt=208656a51aa3812ff8b46284dc5c285a6c774c90b6fe7f47960e0a5d2c987737&ipo=images",
      img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F5%2FDoctor-Strange-PNG-Background-Image.png&f=1&nofb=1&ipt=22c2d398269878d5c5aab32cb731aa81141005e0df512e2f203d7e55fbef8630" 
    },

    { id: 6, name:"Peter Parker", title: "Spiderman", naam:"spiderman", 
      description:"Spiderman is a superhero that is a member of the Avengers. He is a member of the Avengers and is the leader of the team. He is a member of the Avengers and is the leader of the team.",

      img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.5I2ezBrdW_6ds0yppl8tAAHaEK%3Fpid%3DApi&f=1&ipt=edb3927fd3cf9a956bfb422593e2973181227a484160c1a7d1ddd455b56ea735&ipo=images",
      img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.-gIT6a-T9xsMoVYNEfHjsAHaEK%3Fpid%3DApi&f=1&ipt=23310f4def0d4c8ba9961ba6024c8e4ac11b96251054e8e1a7eb99a16152f324&ipo=images",
      img3:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.1zpEi2HUlUScSSNe_FwkaAHaEK%3Fpid%3DApi&f=1&ipt=d413b62eef52db394f3bb14832152eac17126ad3d2d55866af7371c5ad6bfecc&ipo=images",
      img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F3%2FSpider-Man-Standing-PNG-Picture.png&f=1&nofb=1&ipt=da363f2f0de847e76a50cd3bcd06fd4e1db48e1db7bf500d15441c8b8780ef6c"
    },

    { id: 7, name:"Natasha Romanoff", title: "Black Widow", naam:"blackwidow",
      description:"Black Widow is a superhero that is a member of the Avengers. She is a member of the Avengers and is the leader of the team.",

      img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.ibM6FSxklMsGFi4jVOdbAAHaDt%3Fpid%3DApi&f=1&ipt=2010626948988c85763d9ed7c3427978e9bd0ec7f166a71d590235ef972a69b2&ipo=images",
      img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fblack-widow-fight-scene-4k-3zm5dahkql5omh4v.jpg&f=1&nofb=1&ipt=1b1e0a573b7a08e155a911f8138d7e7e3074c251199599fed868c5e1f3621a87",
      img3:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.9xywkeL-nOnch2G_q_xi7gHaD4%3Fpid%3DApi&f=1&ipt=b14ca2e1684cb5de6409836cf702311fdf1f9f6bb3e3ac59940c613b130ff501&ipo=images",
      img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F2%2FBlack-Widow-PNG-Photos.png&f=1&nofb=1&ipt=bf2902fc705cdc71a2eb9389f6e1a410cd8a08e290c3fedcf3bfe3fb29d7abdc"
    },

    { id: 8, name:"Clint Barton", title: "Hawkeye", naam:"hawkeye",
      description:"Hawkeye is a superhero that is a member of the Avengers. He is a member of the Avengers and is the leader of the team.", 
      
      img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.LM_QP6KYocOIeUQN33az-AHaD5%3Fpid%3DApi&f=1&ipt=c3b1265b595c129bee619fb042fdbc9d4961d410a70424e6118212752119130d&ipo=images",
      img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.daspbNLaDH41HOp1_6BRCQHaDt%3Fpid%3DApi&f=1&ipt=bf8689338e57d20bad46497cbfa6bb65d13db8ed5d78e6cf1d92d3b18ea5a640&ipo=images",
      img3:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.REef2JRJnzaKQFzdPudSygHaEK%3Fpid%3DApi&f=1&ipt=d6c94f2321e892696b664cdc622981e35aeffb39259b0ff60c9226852c7dd946&ipo=images",
      img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Fhawkeye-png-hawkeye-png-1800.png&f=1&nofb=1&ipt=0def367d222e34a204a426f626ce62daa7ce56a40cbe0c422e4b0fc975e58700"
    },

    { id: 9, name:"Pietro Maximoff", title: "Vision", naam:"vision",
      
      description:"Vision is a superhero that is a member of the Avengers. He is a member of the Avengers and is the leader of the team.", 
      
      img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.1h5gHJ7QsJ8ZYtUErKPD0QHaHZ%3Fpid%3DApi&f=1&ipt=d67821d8a3748dd5c06341b66e14fdc297ee86cfbee0b205e826c1b9b80bc0a8&ipo=images",
      img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.nOtHNQSwIghm2fs4jHefjgHaDt%3Fpid%3DApi&f=1&ipt=604ee3b14b91ea4a7c7d6a7b0e4ad7bc8f77aa179f89182fdd13037ac9fee9e3&ipo=images",
      img3:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.yHu-tFrB9-s64YTKF_j2agHaEK%3Fpid%3DApi&f=1&ipt=4cea8242fa751691766935787388f1634236f9075d67c2bdea8b756111ea386a&ipo=images",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F6%2FMarvel-Vision-PNG-Photo-1.png&f=1&nofb=1&ipt=fed4ee2ccd297a40ffa46e792185970bbce1983c16b6d8128bf19264390e6584"
    },

    { id: 10, name:"T'Challa", title: "Black Panther", naam:"blackpanther",
      description:"Black Panther is a superhero that is a member of the Avengers. He is a member of the Avengers and is the leader of the team.",

      img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.Q7j3Ng_IsM-WzJHBOetwYQHaEK%3Fpid%3DApi&f=1&ipt=27b1db230fa94defb4325502ad2263baec68290b3a5cde4e0c87a166e31cfbf7&ipo=images",
      img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.mpqJwRBxmtQbjPmbZiOPqgHaEo%3Fpid%3DApi&f=1&ipt=9f80a007a00cd2aabc1a05023212074ffcfa565e777bc9d0d21660efb21b1a92&ipo=images",
      img3:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.-riCosYKR9j77yv8HkjMdwHaDt%3Fpid%3DApi&f=1&ipt=272e1b1036ef7e0c95494a342c2ff4e926651d0941b95e020048f161093cff9a&ipo=images",
      img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F12%2FMarvel-Black-Panther-PNG-Pic.png&f=1&nofb=1&ipt=c53044fee820121bc85d177cd83085378917a047312007cd5348cda32957d443" 
    },

    { id: 11, name:"Scott Lang", title: "Ant-Man", naam:"antman",
      description:"Ant-Man is a superhero that is a member of the Avengers. He is a member of the Avengers and is the leader of the team.",

      img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.vcLl9AvXrSrdvm63L1lSRAHaEP%3Fpid%3DApi&f=1&ipt=d3e7714199b22d9acffe30537e56f59d1374994d6c09fe5b40b709ee4cca4209&ipo=images",
      img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.QVGqjaeaA_LjpWK1f7TTvAHaEK%3Fpid%3DApi&f=1&ipt=a3e1a711664d79d92ee66c6b790d4a174618250ea8d206716f6b94ee6ac7a62c&ipo=images",
      img3:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.k4ZpS821mmtmJ2efxRAT0QHaEK%3Fpid%3DApi&f=1&ipt=ae216ca145a22bf24492a627b0f27b6c33ca525dcecc6fb8e5f82fc5786054a6&ipo=images",
      img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngplay.com%2Fwp-content%2Fuploads%2F12%2FAnt-Man-Marvel-Transparent-Images.png&f=1&nofb=1&ipt=1ea2d2489b35e09dc709d378de3cd4dcb27660a905911f2ed9190d5961255890" 
    },

    { id: 12, name:"Wanda Maximoff", title: "Scarlet Witch", naam:"scarletwitch", 
      
      description:" Wanda Maximoff is a superhero that is a member of the Avengers. She is a member of the Avengers and is the leader of the team.", 
      img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.H_yQVnGyix6tA5Dv0l2-wgHaEK%3Fpid%3DApi&f=1&ipt=571dce7409a62325c1454e1d6bbc4eb63eb2e9355c14af296a0ac7ef030ea740&ipo=images",
      img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.4Wox5-gixg1fqwgpZ9_PpwHaDt%3Fpid%3DApi&f=1&ipt=37478d05b707ec7c8febf72f910262b1617e10ad842d5673dd0948bad4969043&ipo=images",
      img3:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.3szHEpfYCVZmo5vVaodrwQHaEK%3Fpid%3DApi&f=1&ipt=fa226b5bf0bf884620d3e1105f76916b8a226ccbb7c81b8da82addb0072fef28&ipo=images",
      img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F02b60eed-d9c8-4b8e-b826-3ed0694bcf26%2Fdeo4nbc-957a870d-7e2f-4221-849d-4039bd5530a9.png%2Fv1%2Ffill%2Fw_500%2Ch_1050%2Cstrp%2Fscarlet_witch_png_by_lyriumrogue_deo4nbc-fullview.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA1MCIsInBhdGgiOiJcL2ZcLzAyYjYwZWVkLWQ5YzgtNGI4ZS1iODI2LTNlZDA2OTRiY2YyNlwvZGVvNG5iYy05NTdhODcwZC03ZTJmLTQyMjEtODQ5ZC00MDM5YmQ1NTMwYTkucG5nIiwid2lkdGgiOiI8PTUwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.i5PZ_d5KshKGgLECXHKlE5z5tnXNj10m3xl8gaSmpu0&f=1&nofb=1&ipt=28a6e98467b66ab4afd088c3718a2d076972b68fe0d2221ac8d1b02b2f50bccf" 
    },

    { id: 13, name:"Sam Wilson", title: "Falcon", naam:"falcon", 
      
      description:"Sam Wilson is a former member of the S.H.I.E.L.D. and the Falcon Corps. He is a former agent of S.H.I.E.L.D. and a former member of the Falcon Corps. He is a former member of the Falcon Corps.", 
      img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fmarvel-cinematic-universe-films%2Fimages%2F3%2F35%2FSam_Wilson_(AIW).png%2Frevision%2Flatest%3Fcb%3D20190207195219&f=1&nofb=1&ipt=03905da8509c845e8f9bb7b48f2e051418de5236867333b69baa381559b64d63",
      img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.qKfxQRATim7kv874LRVU4AHaDF%3Fpid%3DApi&f=1&ipt=05fef1dc1b11f466d0f73600f1de615613a4b2f02aa6291f298708ac0605b3f2&ipo=images",
      img3:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.wy3IFHC9J4eAFMnMNSLMmwHaEK%3Fpid%3DApi&f=1&ipt=7393262eead032aec4e3af8f40fa58df7cad8624e51e60b92994dc2fce44247a&ipo=images",
      img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F22%2FFalcon-Marvel-Transparent-PNG.png&f=1&nofb=1&ipt=85126475bff8be17ef6484cd4812c84e9d5107c38855cbfcd4ae4e75f27e1663"
    },

    { id: 14, name:"Bucky Barnes", title: "Winter Soldier", naam:"wintersoldier",
      description:"Bucky Barnes is a former member of the S.H.I.E.L.D. and the Falcon Corps. He is a former agent of S.H.I.E.L.D. and a former member of the Falcon Corps. He is a former member of the Falcon Corps.", 
      img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.Ce8-_pIg4qCRxmSpg1oUcQHaEK%3Fpid%3DApi&f=1&ipt=50260391879ecb5d446e3ce615b17af5192a6841a84fd4d932262e5029f0a060&ipo=images",
      img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.huoYHLrZXbo0u-cEINrffwHaEK%3Fpid%3DApi&f=1&ipt=c00fd0c7b779de5894659765dda688c02f9188db2e27dfc916903d746a2c8363&ipo=images",
      img3:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.WeNXzdE6TnGqasGt6XSFPQHaDG%3Fpid%3DApi&f=1&ipt=160da1b480ac4513c603e97ff43601223f513d89ddc0cb66f3c5d7568f096e8e&ipo=images",
      img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F2d819208-bfe6-4330-aaec-c90db2bb52ac%2Fdga6a4t-50f950e3-70fa-4b72-9530-ca1c34e3c431.png%2Fv1%2Ffill%2Fw_730%2Ch_1095%2Fbucky_barnes_winter_soldier__tkd_png_by_xxmcufan2020xx_dga6a4t-pre.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM0NCIsInBhdGgiOiJcL2ZcLzJkODE5MjA4LWJmZTYtNDMzMC1hYWVjLWM5MGRiMmJiNTJhY1wvZGdhNmE0dC01MGY5NTBlMy03MGZhLTRiNzItOTUzMC1jYTFjMzRlM2M0MzEucG5nIiwid2lkdGgiOiI8PTg5NiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Ye5n_n8kCAhWsPPoFbUR6o5ihfoM2gXEBWLnPjmX3es&f=1&nofb=1&ipt=79d57b72b686cbe62abbf74bbbf8b48c8df31e74e917407fddfc69f918570871" 
    },

    { id: 15, name:"Nick Fury", title: "War Machine", naam:"war_machine", 
      
      description:"Nick Fury is a former member of the S.H.I.E.L.D. and the Falcon Corps. He is a former agent of S.H.I.E.L.D. and a former member of the Avengers.",
      img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.DVJaG9yImTAqISbkPIvezwHaEK%3Fpid%3DApi&f=1&ipt=409b4dcc074fd0968e7eafd11cb21d0a06dbb5a0e1acd32f72873eb4999251f7&ipo=images",
      img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.HktS15k-B-yEHWePjcGUNQHaE1%3Fpid%3DApi&f=1&ipt=e4c578b354a3362e32e7ac28028940a07d8405229bf853e324562850f08158fd&ipo=images",
      img3:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.UqauEYyxW3t3nKlnweitmAHaEK%3Fpid%3DApi&f=1&ipt=9eccda8ae64d9dfb7b371cdd4b82a959f8405a1f7696b2866eeeeb5d9b69fa3b&ipo=images",
      img:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette1.wikia.nocookie.net%2Fmarvelmovies%2Fimages%2F3%2F3b%2FWar_Machine_Earth-199999.png%2Frevision%2Flatest%3Fcb%3D20150109042644&f=1&nofb=1&ipt=94a91f52ce4c0313c3b548bd2e672e265599e28532966e8860a9da89d21c760f"
    },

    { id: 16, name:"Carol Danvers", title: "Captain Marvel", naam:"captainmarvel", 
      
      description:"Carol Danvers is a former member of the S.H.I.E.L.D. and the Falcon Corps. She is a former agent of S.H.I.E.L.D. and a former member of the Falcon",
      img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.DFzwGD8NXy0QqL3SNtfo6gHaDY%3Fpid%3DApi&f=1&ipt=94f7fac337e8fa3cb4a868de7fa8ebd9edf10df46d4db3aa9732ca686b0f3862&ipo=images",
      img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%2Fid%2FOIP.UzRO4sV7zOVW-RdEKhzc-AHaFY%3Fpid%3DApi&f=1&ipt=197e93260eb5e23452cd5e947658378913876afb53d3b9dffe673008ea72fe42&ipo=images",
      img3:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.jLvBs6P4xTs-t5A6_l2FtwHaDt%3Fpid%3DApi&f=1&ipt=09f064cbbe39d2d19d27589b5641d76ce3d0438d5bf775a1f69d63223a57ad72&ipo=images",
      img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F22%2FCaptain-Marvel-2019-Movie-PNG-Clipart.png&f=1&nofb=1&ipt=34709826b5420a8ab56d08acd2570395f381fd905bbf46041d18ddbe80f5058c" 
    },

    

  ];

  const getStyle = (id) => ({
    height: active === id ? "100%" : " 350px",
    minWidth: active === id ? "99%" : "350px",
    overflow: active === id ? "hidden" : "",
    position: active === id ? "relative" : "",
    left: active === id ? "0" : "auto",
    top: active === id ? "50%" : "auto",
    transform: active === id ? "translateY(-50%)" : "",
    transition: "height 0.3s ease, position 0.3s ease, left 0.3s ease, top 0.3s ease, transform 0.3s ease",
    
  });

  const getImageStyle = (id) => ({
    height: active === id ? "120%" : "",
    // width: "100%",
    position: active === id ? "absolute" : "",
    left: active === id ? "10%" : "",
    top: active === id ? "70%" : "",
    transform: active === id ? "translateY(-50%)" : "",
    transition: "height 0.3s ease, transform 0.3s ease",
  });

  const getInfoStyle = (id) => ({
    height: active === id ? "150px" : "",
    width: active === id ? "100%" : "",
    position: active === id ? "absolute" : "",
    left: active === id ? "40%" : "",
    top: active === id ? "30%" : "",
    transform: active === id ? "translateY(-50%)" : "",
    transition: "height 0.3s ease, transform 0.3s ease",
    fontSize: active === id ? "60px" : "30px",
  });
  const getDescriptionStyle = (id) => ({
    height: active === id ? "200px" : "",
    width: active === id ? "700px" : "",
    position: active === id ? "absolute" : "",
    left: active === id ? "40%" : "",
    top: active === id ? "52%" : "",
    display: active === id ? "block" : "none",
    transform: active === id ? "translateY(-50%)" : "",
    fontSize: active === id ? "22px" : "",
  });

  const getClipStyle = (id) => ({
    height: active === id ? "200px" : "",
    width: active === id ? "100%" : "",
    position: active === id ? "absolute" : "",
    left: active === id ? "40%" : "",
    top: active === id ? "65%" : "",
    display: active === id ? "block" : "none",
    transform: active === id ? "translateY(-50%)" : "",
    transition: "height 0.3s ease, transform 0.3s ease",
  });

  return (
    <div
      ref={containerRef}
      className="container"
    >
      {cards.map((card) => (
        <div
          key={card.id}
          ref={(el) => (cardRefs.current[card.id] = el)}
          style={getStyle(card.id)}
          onClick={() => handleClick(card.id)}
          className={card.naam}
        > 
          <img 
            src={card.img} alt="" 
            className="image" 
            style={getImageStyle(card.id)} 
          />
          <div className="info" 
            style={getInfoStyle(card.id)}
            >
            <p>{card.name}</p>
            <h2>{card.title}</h2>
          </div>
          <div className="description" 
            style={getDescriptionStyle(card.id)}
            >
            <p>{card.description}</p>
          </div>
          <div className="clip" style={getClipStyle(card.id)}>
            <h2>Clips :</h2><br />
            <img src={card.img1} alt="" />
            <img src={card.img2} alt="" />
            <img src={card.img3} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
