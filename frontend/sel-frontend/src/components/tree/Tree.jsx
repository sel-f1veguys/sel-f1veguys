
import React, { useEffect, useState } from "react";
import Scene from "scenejs";
import "./tree.css"; // Ensure to link the CSS file properly

const TreeComponent = () => {
  const [level, setLevel] = useState(0); // State to control the animation level

  useEffect(() => {
    if (level === 1) {
      const sceneTree = new Scene(
        {
          ".tree": {
            0: { transform: "scale(0)" },
            1.5: { transform: "scale(1)" },
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
      const branch1 = document.querySelector(".branch1");
      const sceneItem = new Scene(
        {
          ".branch1": {
            0: { transform: "scale(0)" },
            1: { transform: "scale(1)" },
          },
        },
        {
          selector: true,
        }
      );

      sceneItem.playCSS();
    }
  }, [level]); // Only runs when level changes to 2

  useEffect(() => {
    if (level === 3) {
      const branch2 = document.querySelector(".branch2");
      const sceneItem = new Scene(
        {
          ".branch2": {
            0: { transform: "scale(0)" },
            1: { transform: "scale(1)" },
          },
        },
        {
          selector: true,
        }
      );

      sceneItem.playCSS();
    }
  }, [level]); // Only runs when level changes to 3

  useEffect(() => {
    if (level === 4) {
      const branch3 = document.querySelector(".branch3");
      const sceneItem = new Scene(
        {
          ".branch3": {
            0: { transform: "scale(0)" },
            1: { transform: "scale(1)" },
          },
        },
        {
          selector: true,
        }
      );

      sceneItem.playCSS();
    }
  }, [level]); // Only runs when level changes to 4

  useEffect(() => {
    if (level === 5) {
      const branch4 = document.querySelector(".branch4");
      const sceneItem = new Scene(
        {
          ".branch4": {
            0: { transform: "scale(0)" },
            1: { transform: "scale(1)" },
          },
        },
        {
          selector: true,
        }
      );

      sceneItem.playCSS();
    }
  }, [level]); // Only runs when level changes to 5

  useEffect(() => {
    if (level === 6) {
      const branch5 = document.querySelector(".branch5");
      const sceneItem = new Scene(
        {
          ".branch5": {
            0: { transform: "scale(0)" },
            1: { transform: "scale(1)" },
          },
        },
        {
          selector: true,
        }
      );

      sceneItem.playCSS();
    }
  }, [level]); // Only runs when level changes to 6

  const handleButtonClick = () => {
    setLevel((prevLevel) => (prevLevel < 6 ? prevLevel + 1 : 6));
  };

  return (
    <div className="container">
      <div className="background">
        <div className="slope">
        </div>
          <button className="pouring-button" onClick={handleButtonClick}>
            Pouring Water
          </button>
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
  );
};

export default TreeComponent;
