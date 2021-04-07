import React, { useEffect } from "react";
import { Recipe } from "./Recipe";
import "./Recipes.css";
import { CheckBox } from "./CheckBox";

export const Recipes = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [checkedItems, setCheckedItems] = React.useState([]);

  const recipesData = [
    {
      to: "/docs/cfn/recipe/apigateway_lambda_recipe",
      imageUrl:
        "https://serverlessland.com/assets/images/patterns/patterns-apigw-lambda-cdk.png",
      title: "Amazon API Gateway to AWS Lambda",
      subTitle: "Create an Amazon API Gateway to AWS Lambda REST API",
      services: ["apigateway", "lambda"],
    },
    {
      to: "/docs/cfn/recipe/cloudfront_to_s3_and_apigateway",
      imageUrl:
        "https://serverlessland.com/assets/images/patterns/cdk-cloudfront-to-s3-and-lambda.png",
      title: "CloudFront to S3 and API Gateway",
      subTitle:
        "CloudFront to S3 and API Gateway backed by TypeScript Lambda functions",
      services: ["apigateway", "s3", "cloudfront", "lambda"],
    },
  ];

  useEffect(() => {
    if (!Object.keys(checkedItems).length) {
      setRecipes(recipesData);
    } else {
      setRecipes(
        recipesData.filter((recipe) =>
          recipe.services.find((service) => checkedItems.includes(service))
        )
      );
    }
  }, [checkedItems]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setCheckedItems([...checkedItems, e.target.value]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== e.target.value));
    }
  };

  const services = [
    ...new Set(recipesData.map((recipe) => recipe.services).flat()),
  ];

  return (
    <>
      <div className="filter-container">
        <div className="filter-header">
          Filters ({recipes.length} templates)
        </div>
        <div className="filter-service-header">Services</div>
        <div className="filter-service-body">
          <form>
            {services.map((item, index) => (
              <label htmlFor={`${item}`} key={`key_${index}`}>
                <CheckBox
                  id={item}
                  value={item}
                  onChange={handleChange}
                  checked={checkedItems[item.id]}
                />
                {item}
              </label>
            ))}
          </form>
        </div>
      </div>
      <div className="recipes-container">
        {recipes.map(({ to, imageUrl, title, subTitle }) => {
          return (
            <div style={{ width: "49%" }} key={title}>
              <Recipe
                to={to}
                imageUrl={imageUrl}
                title={title}
                subTitle={subTitle}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
