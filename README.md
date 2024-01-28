# SimpleReactToDoList

SimpleReactToDoList, React ile geliştirilmiş, UseContext, useEffect, json server, axios, formlar, CSS özellikleri, ve props işlemleri içeren bir Jira benzeri görev yönetimi uygulamasıdır.

## Açıklama

Bu proje, kullanıcıların görev başlıklarını ve görev içeriklerini ekleyebileceği, silip güncelleyebileceği bir görev yönetimi uygulamasını içerir. Proje, React'in Context API'sini (UseContext) kullanarak global durumu yönetir ve görevleri json server üzerinde depolar. Axios kütüphanesi, json server ile iletişim kurmak için kullanılır. Ayrıca, formlar, CSS özellikleri ve props işlemleri ile bileşenler arası etkileşim sağlanır.

## Kullanılan Teknolojiler

- React
- Context API (UseContext)
- useEffect
- json server (Port: 3004)
- Axios
- Formlar
- CSS

## Başlangıç

Projenin yerel ortamda çalıştırılması için aşağıdaki adımları izleyin:

1. Proje klasörüne gidin: `cd SimpleReactToDoList`
2. Bağımlılıkları yükleyin: `npm install` veya `yarn install`
3. Json server'ı başlatın: `json-server --watch db.json --port 3004`
4. Proje uygulamasını başlatın: `npm start` veya `yarn start`

## Kullanım

Uygulamayı başlattıktan sonra tarayıcınızda [http://localhost:3000](http://localhost:3000) adresinde görev yönetim uygulamasını görebilirsiniz. Görev başlığı ve görev içeriği girebileceğiniz bir form bulunur. Aşağıda bu formda eklenen görevleri gösteren bileşenler bulunur. Görevleri silmek veya güncellemek için uygun butonları kullanabilirsiniz.

Json server'ın çalıştığı port: 3004
## Ekran Fotoğrafları
![image](https://github.com/FatiKrca/SimpleReactToDoList/assets/101465668/7e08d3a3-17b8-4cd6-ae1b-13a3410c4e12)
![image](https://github.com/FatiKrca/SimpleReactToDoList/assets/101465668/70c6c249-779e-4ee9-80a0-c9f63bc6b9ae)
![image](https://github.com/FatiKrca/SimpleReactToDoList/assets/101465668/23c7478f-d372-4292-bfd6-9cf3f9e6632b)

