import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const categories = [
  { name: 'Спорт', icon: 'Trophy', color: 'bg-blue-500' },
  { name: 'Технологии', icon: 'Cpu', color: 'bg-purple-500' },
  { name: 'Общество', icon: 'Users', color: 'bg-green-500' },
  { name: 'Наука', icon: 'Microscope', color: 'bg-teal-500' },
  { name: 'Культура', icon: 'Palette', color: 'bg-pink-500' },
  { name: 'Политика', icon: 'Vote', color: 'bg-red-500' }
];

const newsData = [
  {
    id: 1,
    title: 'Революция в области искусственного интеллекта',
    description: 'Новые достижения в машинном обучении открывают невероятные возможности для будущего технологий',
    category: 'Технологии',
    time: '2 часа назад',
    trending: true,
    image: '/img/cc6b2137-aecb-4286-9245-17c622cbdb58.jpg'
  },
  {
    id: 2,
    title: 'Чемпионат мира по футболу: неожиданные результаты',
    description: 'Сборная России показывает отличную игру в групповом этапе турнира',
    category: 'Спорт',
    time: '4 часа назад',
    trending: false,
    image: '/img/80b8d923-750b-4a2c-84df-134895419527.jpg'
  },
  {
    id: 3,
    title: 'Открытие новой экзопланеты в системе Проксима Центавра',
    description: 'Астрономы обнаружили потенциально обитаемую планету в ближайшей звездной системе',
    category: 'Наука',
    time: '6 часов назад',
    trending: true,
    image: '/img/6ca441c7-a6c4-4396-a164-9417d070abea.jpg'
  },
  {
    id: 4,
    title: 'Новые меры поддержки малого и среднего бизнеса',
    description: 'Правительство объявило о расширении программ финансовой поддержки предпринимателей',
    category: 'Общество',
    time: '8 часов назад',
    trending: false,
    image: '/placeholder.svg'
  },
  {
    id: 5,
    title: 'Выставка современного искусства открылась в Москве',
    description: 'Галерея представляет работы молодых российских художников в новом формате',
    category: 'Культура',
    time: '12 часов назад',
    trending: false,
    image: '/placeholder.svg'
  },
  {
    id: 6,
    title: 'Экономические реформы: что ждет страну в 2025 году',
    description: 'Аналитики прогнозируют значительные изменения в налоговой и социальной политике',
    category: 'Политика',
    time: '1 день назад',
    trending: true,
    image: '/placeholder.svg'
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNews = newsData.filter(news => {
    const matchesCategory = !selectedCategory || news.category === selectedCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-primary rounded-lg p-2">
                <Icon name="Newspaper" size={28} className="text-white" />
              </div>
              <h1 className="text-3xl font-bold font-['Roboto'] gradient-text">
                NewsPortal
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Поиск новостей..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
              <Button variant="outline" className="hover-scale">
                <Icon name="Bell" size={18} className="mr-2" />
                Уведомления
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold font-['Roboto'] mb-6 animate-fade-in">
            Будь в курсе самых важных событий
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8 animate-fade-in">
            Актуальные новости из мира спорта, технологий, науки и культуры. 
            Всегда свежая информация от проверенных источников.
          </p>
          <div className="flex justify-center space-x-4 animate-scale-in">
            <Button size="lg" variant="secondary" className="hover-scale">
              <Icon name="TrendingUp" size={20} className="mr-2" />
              Горячие новости
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary hover-scale">
              <Icon name="Globe" size={20} className="mr-2" />
              Мировые события
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold font-['Roboto'] text-gray-800">Категории</h3>
            <Button 
              variant="ghost" 
              onClick={() => setSelectedCategory(null)}
              className={`category-pill ${!selectedCategory ? 'bg-primary text-white' : ''}`}
            >
              Все новости
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card 
                key={category.name}
                className={`cursor-pointer category-pill ${
                  selectedCategory === category.name ? 'ring-2 ring-primary shadow-lg' : ''
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedCategory(category.name)}
              >
                <CardContent className="p-4 text-center">
                  <div className={`${category.color} rounded-full p-3 mx-auto mb-3 w-fit`}>
                    <Icon name={category.icon} size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-sm">{category.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold font-['Roboto'] text-gray-800">
              {selectedCategory ? `Новости: ${selectedCategory}` : 'Последние новости'}
            </h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Icon name="Filter" size={16} className="mr-2" />
                Фильтр
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Calendar" size={16} className="mr-2" />
                Дата
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news, index) => (
              <Card 
                key={news.id} 
                className="news-card animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  {news.trending && (
                    <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                      <Icon name="TrendingUp" size={14} className="mr-1" />
                      Популярное
                    </Badge>
                  )}
                  <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800">
                    {news.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg font-['Roboto'] line-clamp-2 hover:text-primary transition-colors">
                    {news.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {news.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {news.time}
                    </span>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="hover-scale">
                        <Icon name="Share2" size={16} />
                      </Button>
                      <Button size="sm" variant="ghost" className="hover-scale">
                        <Icon name="Bookmark" size={16} />
                      </Button>
                      <Button size="sm" className="hover-scale">
                        <Icon name="ArrowRight" size={16} className="mr-1" />
                        Читать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
              <h4 className="text-xl font-semibold text-gray-600 mb-2">Новости не найдены</h4>
              <p className="text-gray-500">Попробуйте изменить параметры поиска или выбрать другую категорию</p>
            </div>
          )}
        </div>
      </section>

      {/* Trending News Sidebar */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold font-['Roboto'] text-gray-800 mb-6 flex items-center">
            <Icon name="Flame" size={24} className="mr-2 text-red-500" />
            Горячие темы
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {newsData.filter(news => news.trending).map((news, index) => (
              <Card key={news.id} className="hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4">
                  <Badge className="mb-2">{news.category}</Badge>
                  <h4 className="font-semibold text-sm line-clamp-2 mb-2">{news.title}</h4>
                  <div className="flex items-center text-xs text-gray-500">
                    <Icon name="Eye" size={12} className="mr-1" />
                    <span className="mr-3">1.2k просмотров</span>
                    <Icon name="MessageCircle" size={12} className="mr-1" />
                    <span>24 комментария</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary rounded-lg p-2">
                  <Icon name="Newspaper" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold font-['Roboto']">NewsPortal</h3>
              </div>
              <p className="text-gray-400">
                Ваш надежный источник актуальных новостей и аналитики
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-gray-400">
                {categories.slice(0, 3).map(cat => (
                  <li key={cat.name}>
                    <a href="#" className="hover:text-white transition-colors">{cat.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Полезные ссылки</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Реклама</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="hover-scale">
                  <Icon name="Twitter" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="hover-scale">
                  <Icon name="Facebook" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="hover-scale">
                  <Icon name="Instagram" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NewsPortal. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}