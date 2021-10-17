import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import ReactImageMagnify from "react-image-magnify";

const Container = styled.div`
  margin: 10px;
  position: relative;
`;

const ImgContent = styled.div`
  position: sticky;
  top: 110px;
  display: flex;
  flex-direction: column;
  height: 80vh;
`;

const SingleViewContainer = styled.div`
  display: flex;
`;

const VerticalImages = styled.div`
  display: block;
  width: 90px;
  height: 450px;
  overflow-y: auto;
  padding: 5px;
  text-align: center;
`;

const MultImg = styled.img`
  height: 70px;
  width: 50px;
  object-fit: cover;
  margin: 5px 0px;
  display: block;
`;

const ImgView = styled.img`
  width: 100%;
  height: 400px;
  object-fit: contain;
`;

const ImgContainer = styled.div`
  height: 100vh;
  width: 40vw;
  display: flex;
`;
const InfoContainer = styled.div`
  width: 60vw;
  height: auto;
`;
const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const SingeView = () => {
  return (
    <>
      <Container>
        <SingleViewContainer>
          <ImgContent>
            <ImgContainer>
              <VerticalImages>
                <MultImg
                  src="https://rukminim1.flixcart.com/image/800/960/k29bvrk0/jacket/y/g/h/xl-hljk000295-highlander-original-imafhneyvctc92pf.jpeg?q=50"
                  alt=""
                />
                <MultImg
                  src="https://rukminim1.flixcart.com/image/800/960/k29bvrk0/jacket/y/g/h/xl-hljk000295-highlander-original-imafhneyvctc92pf.jpeg?q=50"
                  alt=""
                />
                <MultImg
                  src="https://rukminim1.flixcart.com/image/800/960/k29bvrk0/jacket/y/g/h/xl-hljk000295-highlander-original-imafhneyvctc92pf.jpeg?q=50"
                  alt=""
                />
                <MultImg
                  src="https://rukminim1.flixcart.com/image/800/960/k29bvrk0/jacket/y/g/h/xl-hljk000295-highlander-original-imafhneyvctc92pf.jpeg?q=50"
                  alt=""
                />
                <MultImg
                  src="https://rukminim1.flixcart.com/image/800/960/k29bvrk0/jacket/y/g/h/xl-hljk000295-highlander-original-imafhneyvctc92pf.jpeg?q=50"
                  alt=""
                />
              </VerticalImages>
              <ReactImageMagnify
                {...{
                  // lensStyle: {
                  //   background: "hsla(0, 0%, 100%, .3)",
                  //   border: "1px solid #ccc",
                  // },
                  enlargedImageStyle: {
                    height: "200px",
                    width: "200px",
                  },
                  smallImage: {
                    style: { objectFit: "cover" },
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: false,
                    width: 400,
                    height: 450,
                    src: "https://rukminim1.flixcart.com/image/800/960/k29bvrk0/jacket/y/g/h/xl-hljk000295-highlander-original-imafhneyvctc92pf.jpeg?q=50",
                  },
                  largeImage: {
                    src: "https://rukminim1.flixcart.com/image/800/960/k29bvrk0/jacket/y/g/h/xl-hljk000295-highlander-original-imafhneyvctc92pf.jpeg?q=50",
                    width: 1200,
                    height: 1800,
                  },
                }}
              />
              {/* <ImgView src="https://rukminim1.flixcart.com/image/800/960/k29bvrk0/jacket/y/g/h/xl-hljk000295-highlander-original-imafhneyvctc92pf.jpeg?q=50" /> */}
            </ImgContainer>
            <ButtonGroup>
              <Button color="primary" variant="contained">
                Add To Cart
              </Button>
              <Button color="secondary" variant="contained">
                Buy Now
              </Button>
            </ButtonGroup>
          </ImgContent>

          <InfoContainer>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            repellendus, blanditiis reprehenderit provident alias vitae ea
            aliquam fugiat necessitatibus ullam commodi quidem eveniet est ipsa?
            Iusto nam assumenda dolorum tempore. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Obcaecati repellendus, blanditiis
            reprehenderit provident alias vitae ea aliquam fugiat necessitatibus
            ullam commodi quidem eveniet est ipsa? Iusto nam assumenda dolorum
            tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Obcaecati repellendus, blanditiis reprehenderit provident alias
            vitae ea aliquam fugiat necessitatibus ullam commodi quidem eveniet
            est ipsa? Iusto nam assumenda dolorum tempore. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Obcaecati repellendus,
            blanditiis reprehenderit provident alias vitae ea aliquam fugiat
            necessitatibus ullam commodi quidem eveniet est ipsa? Iusto nam
            assumenda dolorum tempore. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Obcaecati repellendus, blanditiis reprehenderit
            provident alias vitae ea aliquam fugiat necessitatibus ullam commodi
            quidem eveniet est ipsa? Iusto nam assumenda dolorum tempore. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            repellendus, blanditiis reprehenderit provident alias vitae ea
            aliquam fugiat necessitatibus ullam commodi quidem eveniet est ipsa?
            Iusto nam assumenda dolorum tempore. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Obcaecati repellendus, blanditiis
            reprehenderit provident alias vitae ea aliquam fugiat necessitatibus
            ullam commodi quidem eveniet est ipsa? Iusto nam assumenda dolorum
            tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Obcaecati repellendus, blanditiis reprehenderit provident alias
            vitae ea aliquam fugiat necessitatibus ullam commodi quidem eveniet
            est ipsa? Iusto nam assumenda dolorum tempore. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Obcaecati repellendus,
            blanditiis reprehenderit provident alias vitae ea aliquam fugiat
            necessitatibus ullam commodi quidem eveniet est ipsa? Iusto nam
            assumenda dolorum tempore. Obcaecati repellendus, blanditiis
            reprehenderit provident alias vitae ea aliquam fugiat necessitatibus
            ullam commodi quidem eveniet est ipsa? Iusto nam assumenda dolorum
            tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Obcaecati repellendus, blanditiis reprehenderit provident alias
            vitae ea aliquam fugiat necessitatibus ullam commodi quidem eveniet
            est ipsa? Iusto nam assumenda dolorum tempore. Obcaecati
            repellendus, blanditiis reprehenderit provident alias vitae ea
            aliquam fugiat necessitatibus ullam commodi quidem eveniet est ipsa?
            Iusto nam assumenda dolorum tempore. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Obcaecati repellendus, blanditiis
            reprehenderit provident alias vitae ea aliquam fugiat necessitatibus
            ullam commodi quidem eveniet est ipsa? Iusto nam assumenda dolorum
            tempore. Obcaecati repellendus, blanditiis reprehenderit provident
            alias vitae ea aliquam fugiat necessitatibus ullam commodi quidem
            eveniet est ipsa? Iusto nam assumenda dolorum tempore. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Obcaecati repellendus,
            blanditiis reprehenderit provident alias vitae ea aliquam fugiat
            necessitatibus ullam commodi quidem eveniet est ipsa? Iusto nam
            assumenda dolorum tempore. Obcaecati repellendus, blanditiis
            reprehenderit provident alias vitae ea aliquam fugiat necessitatibus
            ullam commodi quidem eveniet est ipsa? Iusto nam assumenda dolorum
            tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Obcaecati repellendus, blanditiis reprehenderit provident alias
            vitae ea aliquam fugiat necessitatibus ullam commodi quidem eveniet
            est ipsa? Iusto nam assumenda dolorum tempore.
          </InfoContainer>
        </SingleViewContainer>
      </Container>
    </>
  );
};

export default SingeView;
