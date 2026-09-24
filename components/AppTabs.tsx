import React from 'react';
import { Tabs } from 'expo-router';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

import Footer from './Footer';

export default function AppTabs() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      tabBar={(props) => (
        <>
          <Footer />
          <BottomTabBar {...props} />
        </>
      )}

      screenOptions={{
        tabBarActiveTintColor:
          Colors[colorScheme ?? 'light'].tint,

        headerShown: false,

        tabBarButton: HapticTab,
      }}
    >

      {/* Aba Hábitos */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Hábitos',

          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name="heartbeat"
              size={24}
              color={color}
            />
          ),
        }}
      />

      {/* Aba IMC */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'IMC',

          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name="weight"
              size={24}
              color={color}
            />
          ),
        }}
      />

      {/* Aba Dicas */}
      <Tabs.Screen
        name="dicas"
        options={{
          title: 'Dicas',

          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name="heartbeat"
              size={24}
              color={color}
            />
          ),
        }}
      />

      {/* Configurações NÃO aparece na barra inferior */}
      <Tabs.Screen
        name="configuracoes"
        options={{
          href: null,
        }}
      />

    </Tabs>
  );
}