<script setup>
useHead({
  title: 'Vizune.com - Avatars'
})

const config = useRuntimeConfig()

const posts100 = await fetch(config.public.avatars100).then((r) => r.json());

const posts200 = await fetch(config.public.avatars200).then((r) => r.json());

const posts400 = await fetch(config.public.avatars400).then((r) => r.json());

const sortPostsByIndex = (posts) => {
  return posts.items.sort((a,b) => a.fields.index < b.fields.index ? 1 : -1);
}

</script>

<template>
  <Content>
    <HeadingTitle small="Vizune" large="Avatars" />
    <Tabs>
      <TabsItem title="100 x 100">
        <AvatarCategory 
          :category="100"
          title="100 x 100 avatars"
          :posts="sortPostsByIndex(posts100)"
          :assets="posts100.includes.Asset"
          :itemsPerPage="24"
        />
      </TabsItem>
      <TabsItem title="200 x 200">
        <AvatarCategory 
          :category="200"
          title="200 x 200 avatars"
          :posts="sortPostsByIndex(posts200)"
          :assets="posts200.includes.Asset"
          :itemsPerPage="15"
        />
      </TabsItem>
      <TabsItem title="400 x 400">
        <AvatarCategory 
          :category="400"
          title="400 x 400 avatars"
          :posts="sortPostsByIndex(posts400)"
          :assets="posts400.includes.Asset"
          :itemsPerPage="6"
        />
      </TabsItem>
    </Tabs>
  </Content>
</template>