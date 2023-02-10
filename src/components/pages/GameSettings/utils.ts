export default function utils() {
  const getRandomBotName = (arr: string[]): string => {
    const name = arr[Math.floor(Math.random() * arr.length)];

    return name;
  };
  const getRandomBotAvatar = (arr: string[]): string => {
    const avatar = arr[Math.floor(Math.random() * arr.length)];

    return avatar;
  };

  return { getRandomBotName, getRandomBotAvatar };
}
