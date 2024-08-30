
  import React, { useEffect, useState } from "react";
  import Scene from "scenejs";
  import "./tree.css"; // Ensure to link the CSS file properly
  import axios from "axios"; 
  import Modal from 'react-modal';
  import styles from './Tree.module.css';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  Modal.setAppElement('#root'); // 모달 접근성 설정, root를 메인 요소로 설정

  const TreeComponent = () => {
    const [level, setLevel] = useState(0); // State to control the animation level
    const [waterPoint, setWaterPoint] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false);
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false); // 정보 모달 상태 추가
    const [selectedGift, setSelectedGift] = useState(""); 


    useEffect(() => {
      const fetchWaterPoint = async () => {
        try {
          const response = await axios.get(`/api/tree/1`);
          setWaterPoint(response.data.count/500); 
          console.log(response.data)
        } catch (error) {
          console.error("Failed to fetch water point data:", error);
        }
      };

      fetchWaterPoint(); // 컴포넌트가 마운트될 때 API 호출
    }, []); 

    useEffect(() => {
      if (level < waterPoint) {
        if(level === 0){
          const timer = setTimeout(() => {
            setLevel((prevLevel) => prevLevel + 1);
          }, 0); 
          return () => clearTimeout(timer); 
        }else{
          const timer = setTimeout(() => {
            setLevel((prevLevel) => prevLevel + 1);
          }, 1000);
          return () => clearTimeout(timer); 
        }

      }
    }, [level, waterPoint]); // level과 waterPoint 값이 변경될 때마다 실행

    useEffect(() => {
      if (level >= 6) {
        const sceneTree = new Scene(
          {
            ".treebackground>.flower": function (i) {
              return {
                0: {opacity: 0, transform: "translateY(0px) rotate(0deg)"},
                1: {opacity: 1},
                4: {opacity: 1},
                5: {opacity: 0, transform: "translateY(300px) rotate(360deg)"},
                options: {
                  delay: 2 + i,
                  iterationCount: "infinite"
                },
              };
            },
          }, {
            selector: true
          }
        );

        sceneTree.playCSS();
      }else{
        const sceneTree = new Scene(
          {
            ".treebackground>.flower": function (i) {
              return {
                0: {opacity: 0, transform: "translateY(0px) rotate(0deg)"}
              };
            },
          }, {
            selector: true
          }
        );

        sceneTree.playCSS();
      }
    }, [level]); 

    useEffect(() => {
      if (level === 1) {
        const sceneTree = new Scene(
          {
            ".tree": {
              0: { transform: "scale(0)" },
              1: { transform: "scale(1)" },
            },
          },
          {
            selector: true,
          }
        );

        sceneTree.playCSS();
      }
    }, [level]); // Only runs when level changes to 1

    useEffect(() => {
      if (level === 2) {
        const sceneTree = new Scene({}, { selector: true });
        const branchs = document.querySelectorAll(".branch1, .branch1 .branch-inner, .branch1 .leaf, .branch1 .flower1");
    
        const depths = [0, 0, 0];
    
        for (let i = 0; i < branchs.length; ++i) {
          const sceneItem = sceneTree.newItem("item2-" + i); // Unique item name
          const className = branchs[i].className;
    
          if (className.includes("branch-inner")) {
            ++depths[1];
            depths[2] = 0;
          } else if (className.includes("branch")) {
            ++depths[0];
            depths[1] = 0;
            depths[2] = 0;
          } else if (className.includes("leaf") || className.includes("flower1")) {
            ++depths[2];
          }
          sceneItem.setElement(branchs[i]);
          sceneItem.setCSS(0, ["transform"]);
    
          const time = depths[0] * 0.5 + depths[1] * 0.5 + depths[2] * 0.5;
          sceneItem.set(time, "transform", "scale", 0);
          sceneItem.set(time + 1, "transform", "scale", 1);
        }
    
        sceneTree.playCSS(); // 애니메이션 실행
      }
    }, [level]);
    
    useEffect(() => {
      if (level === 3) {
        const sceneTree = new Scene({}, { selector: true });
        const branchs = document.querySelectorAll(".branch2, .branch2 .branch-inner, .branch2 .leaf, .branch2 .flower1");
    
        const depths = [0, 0, 0];
    
        for (let i = 0; i < branchs.length; ++i) {
          const sceneItem = sceneTree.newItem("item3-" + i); // Unique item name
          const className = branchs[i].className;
    
          if (className.includes("branch-inner")) {
            ++depths[1];
            depths[2] = 0;
          } else if (className.includes("branch")) {
            ++depths[0];
            depths[1] = 0;
            depths[2] = 0;
          } else if (className.includes("leaf") || className.includes("flower1")) {
            ++depths[2];
          }
          sceneItem.setElement(branchs[i]);
          sceneItem.setCSS(0, ["transform"]);
    
          const time = depths[0] * 0.5 + depths[1] * 0.5 + depths[2] * 0.5;
          sceneItem.set(time, "transform", "scale", 0);
          sceneItem.set(time + 1, "transform", "scale", 1);
        }
    
        sceneTree.playCSS(); // 애니메이션 실행
      }
    }, [level]);
    
    useEffect(() => {
      if (level === 4) {
        const sceneTree = new Scene({}, { selector: true });
        const branchs = document.querySelectorAll(".branch3, .branch3 .branch-inner, .branch3 .leaf, .branch3 .flower1");
    
        const depths = [0, 0, 0];
    
        for (let i = 0; i < branchs.length; ++i) {
          const sceneItem = sceneTree.newItem("item4-" + i); // Unique item name
          const className = branchs[i].className;
    
          if (className.includes("branch-inner")) {
            ++depths[1];
            depths[2] = 0;
          } else if (className.includes("branch")) {
            ++depths[0];
            depths[1] = 0;
            depths[2] = 0;
          } else if (className.includes("leaf") || className.includes("flower1")) {
            ++depths[2];
          }
          sceneItem.setElement(branchs[i]);
          sceneItem.setCSS(0, ["transform"]);
    
          const time = depths[0] * 0.5 + depths[1] * 0.5 + depths[2] * 0.5;
          sceneItem.set(time, "transform", "scale", 0);
          sceneItem.set(time + 1, "transform", "scale", 1);
        }
    
        sceneTree.playCSS(); // 애니메이션 실행
      }
    }, [level]);
    
    useEffect(() => {
      if (level === 5) {
        const sceneTree = new Scene({}, { selector: true });
        const branchs = document.querySelectorAll(".branch4, .branch4 .branch-inner, .branch4 .leaf, .branch4 .flower1");
    
        const depths = [0, 0, 0];
    
        for (let i = 0; i < branchs.length; ++i) {
          const sceneItem = sceneTree.newItem("item5-" + i); // Unique item name
          const className = branchs[i].className;
    
          if (className.includes("branch-inner")) {
            ++depths[1];
            depths[2] = 0;
          } else if (className.includes("branch")) {
            ++depths[0];
            depths[1] = 0;
            depths[2] = 0;
          } else if (className.includes("leaf") || className.includes("flower1")) {
            ++depths[2];
          }
          sceneItem.setElement(branchs[i]);
          sceneItem.setCSS(0, ["transform"]);
    
          const time = depths[0] * 0.5 + depths[1] * 0.5 + depths[2] * 0.5;
          sceneItem.set(time, "transform", "scale", 0);
          sceneItem.set(time + 1, "transform", "scale", 1);
        }
    
        sceneTree.playCSS(); // 애니메이션 실행
      }
    }, [level]);
    
    useEffect(() => {
      if (level === 6) {
        const sceneTree = new Scene({}, { selector: true });
        const branchs = document.querySelectorAll(".branch5, .branch5 .branch-inner, .branch5 .leaf, .branch5 .flower1");
    
        const depths = [0, 0, 0];
    
        for (let i = 0; i < branchs.length; ++i) {
          const sceneItem = sceneTree.newItem("item6-" + i); // Unique item name
          const className = branchs[i].className;
    
          if (className.includes("branch-inner")) {
            ++depths[1];
            depths[2] = 0;
          } else if (className.includes("branch")) {
            ++depths[0];
            depths[1] = 0;
            depths[2] = 0;
          } else if (className.includes("leaf") || className.includes("flower1")) {
            ++depths[2];
          }
          sceneItem.setElement(branchs[i]);
          sceneItem.setCSS(0, ["transform"]);
    
          const time = depths[0] * 0.5 + depths[1] * 0.5 + depths[2] * 0.5;
          sceneItem.set(time, "transform", "scale", 0);
          sceneItem.set(time + 1, "transform", "scale", 1);
        }
    
        sceneTree.playCSS(); // 애니메이션 실행
      }
    }, [level]);
    


    useEffect(() => {
      console.log(waterPoint)
    }, [waterPoint]); // Only runs when level changes to 6

    const handleButtonClick = async () => {
      try {
        const response = await axios.put(`/api/tree/1/water`);
        
        // 서버에서 반환된 데이터를 처리하거나, 상태를 업데이트하는 코드 추가 가능
        console.log("Watering successful:", response.data);
        setLevel(response.data.count/500); 
        setWaterPoint(response.data.count/500);

      } catch (error) {
        if (error.response && error.response.data.message === "보유하고 있는 포인트가 부족합니다.") {
          toast.error("보유하고 있는 포인트가 부족합니다.");
        } else {
          console.error("Failed to send watering request:", error);
        }
      }
    };

    const receiveGift = async () => {
      setIsModalOpen(true); // 모달 열기
    };

    const closeModal = () => {
      setIsModalOpen(false); 
    };

    const closeModal2 = () => {
      setIsModal2Open(false); 
    };

    const openInfoModal = () => {
      setIsInfoModalOpen(true);
    };
  
    // 정보 모달을 닫는 함수
    const closeInfoModal = () => {
      setIsInfoModalOpen(false);
    };

    const choiceGift = async (gift) => {
      try {
        const response = await axios.put(`/api/tree/1/gifticon`);
        setSelectedGift(gift); 
        console.log("Watering successful:", response.data);
        setWaterPoint(0); // 물 양 초기화
        setLevel(response.data.count); 
        setIsModalOpen(false); 
        setIsModal2Open(true); // 새로운 모달 열기
      } catch (error) {
        console.error("Failed to send watering request:", error);
        setIsModalOpen(false); 
      }
      console.log("닫음");
    };

    return (
      <div className={styles.mainmain}>
      <div className="treecontainer">
          <ToastContainer position="top-center" autoClose={3000} /> 
        <div className="treebackground">
        <div className="flower roundpetal petal5 flower1">
      <div className="petal">
        <div className="petal">
          <div className="petal">
          </div>
        </div>
      </div>
    </div>
    <div className="flower roundpetal petal5 flower2 blueflower">
      <div className="petal">
        <div className="petal">
          <div className="petal">
          </div>
        </div>
      </div>
    </div>
    <div className="flower roundpetal petal5 flower3 yellowflower">
      <div className="petal">
        <div className="petal">
          <div className="petal">
          </div>
        </div>
      </div>
    </div>
    <div className="flower roundpetal petal5 flower4 purpleflower">
      <div className="petal">
        <div className="petal">
          <div className="petal">
          </div>
        </div>
      </div>
    </div>
          <div className="slope">
          </div>
          {waterPoint < 6 ? (
            <div className="button-container">
            <button className="info-button" onClick={openInfoModal}>
            <i className="bi bi-info-circle-fill"></i>
            </button>
            <button className="dogam-button" onClick={openInfoModal}>
            <i className="bi bi-book"></i>
            </button>
            <button className="pouring-button" onClick={handleButtonClick}>
            <i className="bi bi-droplet-half"></i>
            </button>
  {/* <button className={styles.buttonliq}>
    <span className={styles.liquid}></span>  
    <span className={styles.btntxt123}><i class="bi bi-droplet-half"></i></span>
  </button> */}

<Modal
            isOpen={isInfoModalOpen}
            onRequestClose={closeInfoModal}
            contentLabel="Information"
            className={styles.modal}
            overlayClassName={styles.overlay}
          >
            <h2>나무 키우기</h2>
            <p>지금 까지 얻은 포인트로 나무가 자라도록 물을 주세요</p>
            <button onClick={closeInfoModal} className={styles.closeButton}>닫기</button>
          </Modal>
            </div>

            
            
            ) : (

              <div className="button-container">
              <button className="info-button" onClick={openInfoModal}>
              <i className="bi bi-info-circle-fill"></i>
              </button>
              <button className="dogam-button" onClick={openInfoModal}>
              <i className="bi bi-book"></i>
              </button>
            <button className="receive-button" onClick={receiveGift}>
              <i class="bi bi-gift"></i>
            </button>
            </div>
          )}
          <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="기프티콘 받기"
          className={styles.modal}
          overlayClassName={styles.overlay}
        >
          <h2>축하합니다! 나무가 다 자랐어요</h2>
          <img src="./assets/tree4.png" alt="Tree" className={styles.modaltreeimg} />
          <p>보상을 선택하세요</p>
          <button onClick={() => choiceGift("커피")} className={styles.giftButton1}>커피</button>
    <button onClick={() => choiceGift("간식")} className={styles.giftButton2}>간식</button>
    <button onClick={() => choiceGift("빵")} className={styles.giftButton3}>빵</button>
        </Modal>
        <Modal
    isOpen={isModal2Open}
    onRequestClose={closeModal2}
    contentLabel="선택한 기프티콘"
    className={styles.modal}
    overlayClassName={styles.overlay}
  >
    <h2>축하합니다</h2>
    <img src={`./assets/${selectedGift}.jpg`} alt={selectedGift} className={styles.giftimg} />
    <div className={styles.buttonContainer}>
      <a href={`./assets/${selectedGift}.jpg`} download={`${selectedGift}.jpg`} className={styles.saveimg}>
        저장하기
      </a>
      <button onClick={closeModal2} className={styles.closeButton}>닫기</button>
    </div>
  </Modal>
          {level >= 1 && (
            <div className="tree">
              {level >= 2 && (
                <>
                  <div className="branch left branch1">
                    <div className="branch left branch-inner1">
                      <div className="leaf leaf1"></div>
                      <div className="leaf leaf2"></div>
                      <div className="leaf leaf3"></div>
                      <div className="heart flower1 blueflower"></div>
                    </div>
                    <div className="branch left branch-inner2">
                      <div className="leaf leaf1"></div>
                      <div className="leaf leaf2"></div>
                      <div className="leaf leaf3"></div>
                      <div className="tulip flower1 redflower">
                        <div className="peak"></div>
                      </div>
                    </div>
                    <div className="branch left branch-inner3">
                      <div className="leaf leaf1"></div>
                      <div className="leaf leaf2"></div>
                    </div>
                    <div className="flower petal5 flower1 redflower">
                      <div className="petal">
                        <div className="petal">
                          <div className="petal"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {level >= 3 && (
                <>
                  <div className="branch right branch2">
                    <div className="branch left branch-inner1">
                      <div className="leaf leaf1"></div>
                      <div className="leaf leaf2"></div>
                      <div className="leaf leaf3"></div>
                      <div className="flower petal5 flower1 blueflower">
                        <div className="petal">
                          <div className="petal">
                            <div className="petal"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="branch right branch-inner2">
                      <div className="leaf leaf1"></div>
                      <div className="leaf leaf2"></div>
                      <div className="leaf leaf3"></div>
                      <div className="tulip flower1 greenflower">
                        <div className="peak"></div>
                      </div>
                    </div>
                    <div className="branch right branch-inner3">
                      <div className="leaf leaf1"></div>
                      <div className="leaf leaf2"></div>
                      <div className="leaf leaf3"></div>
                      <div className="branch left branch-inner4">
                        <div className="leaf leaf1"></div>
                        <div className="flower petal5 flower1 yellowflower">
                          <div className="petal">
                            <div className="petal">
                              <div className="petal"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tulip flower1 purpleflower">
                        <div className="peak"></div>
                      </div>
                    </div>
                    <div className="flower petal5 roundpetal flower1">
                      <div className="petal">
                        <div className="petal">
                          <div className="petal">
                            <div className="petal"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {level >= 4 && (
                <>
                  <div className="branch left branch3">
                    <div className="branch right branch-inner1">
                      <div className="leaf leaf1"></div>
                      <div className="leaf leaf2"></div>
                      <div className="leaf leaf3"></div>
                      <div className="heart flower1"></div>
                    </div>
                    <div className="branch left branch-inner2">
                      <div className="leaf leaf1"></div>
                      <div className="leaf leaf2"></div>
                      <div className="leaf leaf3"></div>
                      <div className="tulip flower1">
                        <div className="peak"></div>
                      </div>
                    </div>
                    <div className="leaf leaf1"></div>
                    <div className="leaf leaf2"></div>
                    <div className="flower roundpetal petal5 flower1 purpleflower">
                      <div className="petal">
                        <div className="petal">
                          <div className="petal"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {level >= 5 && (
                <>
                  <div className="branch right branch4">
                    <div className="branch left branch-inner1">
                      <div className="leaf leaf1"></div>
                      <div className="leaf leaf2"></div>
                      <div className="leaf leaf3"></div>
                      <div className="flower petal5 flower1 yellowflower">
                        <div className="petal">
                          <div className="petal">
                            <div className="petal"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="branch right branch-inner2">
                      <div className="leaf leaf1"></div>
                      <div className="leaf leaf2"></div>
                      <div className="leaf leaf3"></div>
                      <div className="tulip tulip1 flower1 purpleflower">
                        <div className="peak"></div>
                      </div>
                    </div>
                    <div className="flower petal5 roundpetal flower1">
                      <div className="petal">
                        <div className="petal">
                          <div className="petal">
                            <div className="petal"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {level >= 6 && (
                <>
                  <div className="branch left branch5">
                    <div className="branch right branch-inner1">
                      <div className="leaf leaf1"></div>
                      <div className="leaf leaf2"></div>
                      <div className="leaf leaf3"></div>
                      <div className="heart flower1"></div>
                    </div>
                    <div className="branch left branch-inner2">
                      <div className="leaf leaf1"></div>
                      <div className="leaf leaf2"></div>
                      <div className="leaf leaf3"></div>
                      <div className="tulip flower1 greenflower">
                        <div className="peak"></div>
                      </div>
                    </div>
                    <div className="flower roundpetal petal5 flower1 blueflower">
                      <div className="petal">
                        <div className="petal">
                          <div className="petal"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      </div>
    );
  };

  export default TreeComponent;
