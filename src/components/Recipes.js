import React from "react";
import { Recipe } from "./Recipe";

export const Recipes = () => {
  const recipes = [
    {
      to: "/docs/cfn/recipe/apigateway_lambda_recipe",
      imageUrl:
        "https://serverlessland.com/assets/images/patterns/patterns-apigw-lambda-cdk.png",
      title: "Amazon API Gateway to AWS Lambda",
      subTitle: "Create an Amazon API Gateway to AWS Lambda REST API",
    },
    {
      to: "/docs/cfn/recipe/cloudfront_to_s3_and_apigateway",
      imageUrl:
        "https://serverlessland.com/assets/images/patterns/cdk-cloudfront-to-s3-and-lambda.png",
      title: "CloudFront to S3 and API Gateway",
      subTitle:
        "CloudFront to S3 and API Gateway backed by TypeScript Lambda functions",
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {recipes.map(({ to, imageUrl, title, subTitle }) => {
        return (
          <div style={{ width: "50%", padding: "10px" }} key={title}>
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
  );
};
