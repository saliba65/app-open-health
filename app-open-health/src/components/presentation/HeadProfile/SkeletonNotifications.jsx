/* eslint-disable react/no-array-index-key */
import React from "react";
import Flex from "components/core/Grid/Flex";
import Skeleton from "react-loading-skeleton";
import {
  Notifications,
  NotificationNew,
  NotificationsTitleDate,
  ViewAll,
} from "./HeadProfileStyle";

const SkeletonNotifications = () => {
  const skeletonRepeat = 3;

  return (
    <>
      <Notifications>
        {[...Array(skeletonRepeat)].map((_val, index) => (
          <Flex justifyContent="space-between" key={index}>
            <Flex flexDirection="column">
              <NotificationNew>
                <Skeleton duration={0.8} width="204px" height="19px" />
              </NotificationNew>
              <NotificationsTitleDate>
                <Skeleton duration={0.8} width="204px" height="19px" />
              </NotificationsTitleDate>
            </Flex>
            <Flex mr={3}>
              <Skeleton circle duration={0.8} width="10px" height="10px" />
            </Flex>
          </Flex>
        ))}
      </Notifications>

      <ViewAll>
        <Skeleton duration={0.8} width="100px" height="19px" />
      </ViewAll>
    </>
  );
};

export default SkeletonNotifications;
