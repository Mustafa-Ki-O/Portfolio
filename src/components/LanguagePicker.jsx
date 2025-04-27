import { useState } from "react";
import { UnstyledButton, Menu, Image, Group, Tooltip } from "@mantine/core";
// import { IconChevronDown } from "@tabler/icons-react";
import down from '../assets/vectors/down.svg'
import classes from "../assets/css/LanguagePicker.module.css";
import england from "../assets/vectors/en.svg";
import germany from "../assets/vectors/du.svg";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";
export function LanguagePicker() {
  const { t, i18n } = useTranslation();

  const [lang, setLang] = useState(localStorage.getItem('lang'));
//   useEffect(() => {
//     document.getElementById('root').setAttribute('dir', lang === 'en' ? 'rtl' : 'ltr');
//   }, [lang]);

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
      bg={'#fff'}
    >
      <Tooltip label={item.label} color="#16aabb" position="right" offset={15}>
        <Image src={item.image} width={15}  />
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
              width={22}
              height={22}
            />
          </Group>
          {/* <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} /> */}
          <Image src={down} w={10} ml={8} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}