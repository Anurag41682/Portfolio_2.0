const CategoryButton: React.FC<{
  category: string;
  className: string;
  onChangeCategory: (category: string) => void;
}> = ({ category, className, onChangeCategory }) => {
  return (
    <button
      onClick={() => {
        onChangeCategory(category);
      }}
      className={className}
    >
      {category}
    </button>
  );
};

export default CategoryButton;
