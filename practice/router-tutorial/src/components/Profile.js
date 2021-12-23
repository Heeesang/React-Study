import React from "react";
import { useParams } from "react-router-dom";

const data = {
  pumpkin: {
    name: "호박쿵야",
    description: "호박쿵야를 닮아서 호박쿵야",
  },
  loveKim: {
    name: "김사랑",
    description: "호박쿵야의 막내 동생",
  },
};

const Profile = () => {
  const { username } = useParams();
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h1>안녕하세요 {profile.name}</h1>
      <p>소개: {profile.description}</p>
    </div>
  );
};

export default Profile;
