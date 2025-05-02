import { useState } from "react";
import { UnstyledButton, Menu, Image, Group, Tooltip } from "@mantine/core";
// import { IconChevronDown } from "@tabler/icons-react";
import down from '../assets/vectors/down.svg'
import classes from "../assets/css/LanguagePicker.module.css";
import england from "../assets/vectors/en.svg";
import germany from "../assets/vectors/du.svg";

import { useTranslation } from "react-i18next";
import { useMantineColorScheme } from "@mantine/core";
export function LanguagePicker() {
  const { t, i18n } = useTranslation();
     const { colorScheme } = useMantineColorScheme();
     const bgColor = colorScheme === 'dark' ?  '#242424'  :  '#fff';
  const [lang, setLang] = useState(localStorage.getItem('lang'));

  const handleLanguageChange = (item) => {
    console.log(item.value)
    localStorage.setItem("lang", item.value);
    setLang(item.value);
    i18n.changeLanguage(item.value);
  };

  const data = [
    { label: t('English'), image: england, value: "en" },
    { label: t('German'), image: germany, value: "du" },
  ];

  const [opened, setOpened] = useState(false);
  // const lang = localStorage.getItem("lang");

  const items = data.map((item) => (
    <Menu.Item
      
      onClick={() => handleLanguageChange(item)}
      key={item.label}
      value={item.value}
      className={classes.menuItem}
      bg={bgColor}
    >
      <Tooltip label={item.label} color="#16aabb" position="right" offset={15}>
        <Image src={item.image} w={{base:'1.4rem',md:'2vw'}} m={'auto'} />
      </Tooltip>
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
      p={10}
    >
      <Menu.Target >
        <UnstyledButton
          w="fit-content"
          className={classes.control}
          data-expanded={opened || undefined}
          p={0}
        //   bg={'#16aabb'}
        >
          <Group  >
            <Image
              src={lang === "du" ? data[1].image : data[0].image}
              w={{base:'1.4rem',md:'2vw'}}
              h={{base:'1.4rem',md:'2vw'}}
            />
          </Group>
          <Image src={down} w={{base:'1rem',md:'1.1vw'}} ml={8} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}